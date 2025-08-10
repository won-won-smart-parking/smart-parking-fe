# pre-commit

pre-commit 훅은 커밋이 생성되기 직전에, 개발자가 지정한 검증 작업을 실행하는 Git Hook이다. <br />
이 훅에서 검증이 실패하면 커밋 생성은 자동으로 취소되며, 모든 검증을 통과해야만 커밋 생성이 완료된다.

## lint-staged

Husky는 Git Hook를 관리 및 실행 할 수 있게 해주는 도구이지만, 변경된 파일만을 대상으로 검증 작업을 실행하는 기능은 제공하지 않는다. <br />
따라서 pre-commit 훅에서 변경된 파일만 검사하기 위해서는 lint-staged 패키지를 사용해 해당 파일에만 검증 작업을 수행하도록 설정해야 하며, 이를 통해 성능을 최적화할 수 있다. 

> 💡 내부적으로 unix 기반 스크립트를 작성하면, 사실 변경 파일만 검증하는 접근 자체는 가능하다. <br />
> 다만, lint-staged 같은 경우에는 내부적으로 `git diff`를 통해 변경 파일을 감지하고, 검증 후 자동으로 `git add`까지 실행해준다. 반면, Unix 스크립트로 직접 구현하면 동일한 기능을 제공하는데도 불구하고, 작성 및 유지보수의 번거로움과 최적화 작업을 모두 처리해야 하기 떄문에 권장하지는 않는다.

## 📋 커밋 생성 직전 자동화 종류

```bash
# 시크릿 키 검사
# gitleaks 설치 여부 확인
command -v gitleaks >/dev/null || {
  echo "⚠️ gitleaks가 설치되어 있지 않아 시크릿 스캔을 건너뜁니다."
  echo "   설치 방법: macOS → brew install gitleaks / Windows → choco install gitleaks"
  exit 1
}

# 시크릿 키 검사
if git diff --cached --name-only | grep -q .; then
  echo "▶ 스테이징된 파일에 대해 gitleaks로 시크릿 스캔을 실행합니다..."
  gitleaks protect --staged --redact --no-banner
else
  echo "✅ 스테이징된 파일이 없습니다. gitleaks 스킵."
fi

yarn typecheck # 타입 체크 (tsconfig.json 기반)
npx lint-staged # 변경된 파일만 린트 & 포맷팅
```

> **⚠️ gitleaks 설치**
> gitleaks는 각 로컬 환경에 반드시 brew install gitleaks & choco install gitleaks를 통해서 설치할 것!!

1. **gitleaks 설치 여부 확인**: gitleaks가 전역에 설치되어 있지 않으면 커밋 중단
1. **시크릿 키 검사(gitleaks)**: 변경된 파일에 시크릿 키가 포함돼 있으면 커밋 중단
1. **타입 체크(typescript compiler)**: 타입스크립트 컴파일러로 타입 규칙 검증
1. **lint-staged**: 변경된 파일만 대상으로 린트 및 포맷 실행
```json
"lint-staged": {
    "**/*.{ts,tsx}": [
      "eslint --cache --cache-location .eslintcache",
      "prettier --write"
    ],
    "**/*.json": [
      "prettier --write"
    ]
  },
```
- "**/*.{ts,tsx}": ESLint 규칙 검증 + Prettier 자동 포맷팅
- "**/*.json": Prettier 자동 포맷팅