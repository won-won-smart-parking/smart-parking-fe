# 🕵️‍♂️ Prettier 개요

Prettier는 팀원 간의 일관된 코드 스타일 유지를 위해 코드를 자동으로 정렬하고 서식을 맞춰는 코드 포맷터(Code Formatter) 도구이다.

## 📝 `.prettierrc`

```json
{
  "plugins": ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  "arrowParens": "always",
  "bracketSameLine": false,
  "bracketSpacing": true,
  "endOfLine": "lf",
  "jsxSingleQuote": false,
  "printWidth": 120,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "importOrder": ["<THIRD_PARTY_MODULES>", "^@(.*)$", "^[.]/", "^[.]{2,}/"],
  "importOrderSortSpecifiers": true,
  "importOrderCaseInsensitive": true
}
```

| 옵션 | 설명 |
|--|--|
| plugins | Prettier 기능 확장을 위한 외부 플러그인 지정 옵션 (기본값: []) |
| arrowParens | 화살표 함수 사용 시 매개변수 개수가 하나일 경우에도 자동으로 괄호 표시 여부 (기본값: always) |
| bracketSpacing | 객체 리터럴 표현식에서 공백 삽입 여부 (기본값: true) |
| bracketSameLine | JSX 문법에서 속성이 길어질 경우 ">" 기호를 다음 줄에 배치할지 여부 제어 (기본값: false) |
| endOfLine | 파일 저장 시 줄바꿈 문자 방식 제어 (기본값: auto) |
| jsxSingleQuote | JSX 속성 값 문자열 표현 작은 따옴표 방식 제어 (기본값: false) |
| printWidth | 인라인으로 작성할 수 있는 길이 제어 (기본값: 80) |
| proseWrap | Markdown 내부 긴 텍스트 줄바꿈 여부 지정 (기본값: preserve, printWidth 기준으로 줄바꿈 여부 확인) |
| quoteProps | 객체 속성(Property) 따옴표 적용 제어 (기본값: as-needed) |
| semi | 세미콜론 사용 여부 (기본값: true) |
| singleQuote | 변수값 문자열 표현 작음 따옴표 방식 제어 (기본값: true) |
| tabWidth | 탭 간격 (기본값: 2) |
| trailingComma | 여러 줄로 작성된 구문에서 후행 콤마 사용 방식 제어 (기본값: all) |
| importOrder | 모듈(패키지, 경로) import 구문 정렬 순서 제어 (⚠️ 별도 플러그인 설치 필요) |
| importOrderSortSpecifiers | 동일한 모듈에서 import하는 개별 식별자 정렬 여부 지정 |
| importOrderCaseInsensitive | import 구문 정렬 시 대소문자 구분 제어 |

`.prettierrc`는 코드 스타일 유지를 위해 Prettier의 다양한 옵션을 설정할 수 있는 구성 파일이다. <br />
Smart Parking 팀은 Toss에서 운영 중인 es-toolkt의 Prettier 설정을 기반으로 대부분을 적용하고, 일부 옵션만 프로젝트에서 맞게 수정했습니다.

## 🙂‍↔️ `.prettierignore`

.prettierignore는 자동 포맷팅에 의해 무시될 파일들을 지정하는 파일이다.