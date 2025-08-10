# pre-push

pre-push 훅은 원격 저장소에 변경된 내용을 반영(push)하기 직전에, 개발자가 지정한 검증 작업을 실행하는 Git Hook이다. <br />
이 훅에서 검증이 실패하면 반영은 자동으로 취소되며, 모든 검증을 통과해야만 반영이 완료된다.

<br />

## 📋 원격 저장소 반영(Push) 직전 자동화 종류

```bash
# 1. 브랜치 패턴 검사
BRANCH_NAME=$(git symbolic-ref --short HEAD)
echo "$BRANCH_NAME" | grep -Eq '^(main|release|dev|hotfix|feat\/[a-z0-9._-]+|fix\/[a-z0-9._-]+|refactor\/[a-z0-9._-]+|test\/[a-z0-9._-]+|docs\/[a-z0-9._-]+|chore\/[a-z0-9._-]+)$' \
  || { echo "🚫 브랜치 이름 잘못 작성함!!"; exit 1; }

# 2. 시크릿 키 검증
if ! command -v gitleaks >/dev/null 2>&1; then
  echo "⚠️ gitleaks가 설치되어 있지 않아 시크릿 스캔을 건너뜁니다."
  echo "   설치 방법: macOS → brew install gitleaks / Windows → choco install gitleaks"
  exit 1
else
  echo "pre-push / 시크릿 키 검증..."
  gitleaks detect --no-git --source . --redact --no-banner
fi

echo "pre-push / 환경 변수 유효성 검증..."; yarn env:check || exit 1     # 3. 환경 변수 유효성 검증
echo "pre-push / 엄격한 Lint 규칙 검증..."; yarn lint:strict || exit 1  # 4. 코드 스타일 규칙 검증
echo "pre-push / 타입 안전성 검증..."; yarn typecheck || exit 1         # 5. 타입 안전성 검증

# 6. 단위 테스트(Jest + RTL)
echo "pre-push / 코드 수행(없으면 자동 통과)..."
if git rev-parse --abbrev-ref @{upstream} >/dev/null 2>&1; then
  yarn test:related || exit 1
else
  yarn jest --bail --maxWorkers=50% --onlyChanged --passWithNoTests || exit 1
fi
```

> **⚠️ gitleaks 설치**
> gitleaks는 각 로컬 환경에 반드시 brew install gitleaks & choco install gitleaks를 통해서 설치할 것!!

<br />

1. **브랜치 패턴 검사**: 원격 저장소에 반영하기 위해 허용되는 브랜치 이름을 작성 여부 검증
1. **시크릿 키 검사(gitleaks)**: 전체 파일 기준 시크릿 키 포함 여부 검증
1. **환경 변수 유효성 검사(zod)**: 환경 변수 포함 여부 검증
1. **엄격한 Lint 규칙 검사(eslint)**: 경고(Warning)도 허용하지 않는 Lint 여부 검증
1. **타입 체크(typescript compiler)**: commit과 동일하지만 한 번 더 타입 검증
1. **Jest + RTL 기반 단위 테스트 실행**: Jest 의존성 그래프 기반 변경된 코드와 해당 코드에 의존하는 테스트 파일만 실행