# commit-msg

commit-msg 훅은 커밋 메시지가 임시로 저장하는 파일의 경로를 매개변수로 받아, 해당 메시지가 규칙에 맞는지 검증하는 Git Hook이다. <br />
이 훅에서 실행되는 스크립트가 0이 아닌 값을 반환하면 커밋이 중단된다.

<br />

## ☝️ `commitlint.config.js` 구성

Husky는 Git Hooks를 관리 및 실행 할 수 있게 해주는 도구이지만, 커밋 메시지 규칙을 직접 정의하는 기능은 제공하지 않는다. <br />
따라서 commit-msg 훅에서 메시지를 검증하기 위해서는 Commitlint 패키지를 사용해 `commitlint.config.js` 파일에 규칙을 정의해야 한다.

<br />

```javascript
module.exports = {
  extends: ["@commitlint/config-conventional"],
  plugins: [
    {
      rules: {
        "header-match-issue-at-end": (parsed, when = "always") => {
          const header = parsed.header || "";
          const regex = /^(\w+)(\(.+\))?: .+ \(#\d+\)$/; // <type>(<scope>): <subject> (#123)
          const pass = regex.test(header);
          return [when === "always" ? pass : !pass, 'header must match "<type>(<scope>): <subject> (#issue-number)".'];
        },
      },
    },
  ],
  rules: {
    // 허용되는 commit type 정의
    "type-enum": [
      2,
      "always",
      [
        "feat", // 기능 추가
        "fix", // 버그 수정
        "update", // 기능 보완
        "refactor", // 리팩토링
        "test", // 테스트 관련
        "style", // 스타일 변경
        "init", // 초기 설정
        "chore", // 빌드/설정 변경
        "move", // 파일 이동
        "rename", // 이름 변경
        "remove", // 삭제
        "docs", // 문서 작업
        "comment", // 주석 변경
      ],
    ],
    "header-max-length": [2, "always", 72], // commit message 길이 제한 (72자)
    "subject-case": [0], // description 대소문자 자유
    "header-match-issue-at-end": [2, "always"], // <type>: <description> (#issue-number) 커밋 메시지 구조 규칙 강제 시키기
  },
};
```

- `extends`: 기본적으로 적용할 Commitlint 규칙 세트를 지정한다.
- `plugins`: Commitlint의 기능을 확장하기 위해 추가하는 플러그인 목록이다.
  - `rules`: 플러그인에서 정의하는 사용자 지정 규칙 집합
- `rules`: 커밋 메시지 검증에 사용할 규칙을 정의한다.
  - `type-enum`: 허용되는 커밋 타입 목록을 지정한다.
  - `header-max-length`: 커밋 메시지 내용의 최대 길이를 제한한다. (타입, 메시지, 이슈 번호 모두 포함)
  - `subject-case`: 커밋 메시지 설명의 대소문자 규칙을 지정한다.
  - `header-match-issue-at-end`: `plugins/rules`에 정의한 사용자 지정 규칙 형식을 따르는지 검증한다.