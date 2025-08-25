# 🔑 환경 변수

환경 변수(Environment Variable)란, 운영체제나 애플리케이션의 설정 값들을 외부에서 설정하고 관리할 수 있게 해주는 변수들로, 코드에 직접 하드 코딩하지 않고도 민감한 정보나 설정 값을 관리할 수 있게 한다.

## I. 환경 변수 관리 및 기본 사용법

### 1. 환경 변수 관리

```
EXPO_PUBLIC_API_KEY=api-key
```

> 💡 React Native 환경에서 사용되는 공개키는 `접두사로 EXPO_PUBLIC_` 접두사를 붙여주세요.

- 애플리케이션에서 민감한 정보나 환경에 따라 달라지는 설정 값을 코드에 직접 쓰지 않고, .env 파일과 GitHub Secrets로 관리한다.
  - .env: 로컬 환경에서 환경 변수를 접근할 수 있는 파일
  - GitHub Secrets: CI / 배포 환경에서 환경 변수를 접근할 수 있는 파일

- React Native에서는 **"공개키(Public Key)"** 만 포함합니다.

#### ■ 환경 변수 관리 방법 순서

1. 사용할 환경 변수 값을 .env 파일과 GitHub Secrets에 추가한다.
2. `./scripts/env-check/schemas/public.ts` 파일에 Zod 스키마 값을 추가한다.

```yml
# 5. 환경 변수 유효성 검증 단계
- name: Env Check
  if: ${{ github.event_name == 'pull_request' }}
  env:
    NODE_ENV: ${{ secrets.NODE_ENV }}
    ENV_REPORT_JSON: env-report.json
    # ... <- 여기에 환경 변수 추가
    # GitHub Secrets에 추가한 경우 -> EXPO_PUBLIC_API_KEY: ${{ secrets.EXPO_PUBLIC_API_KEY }}
    # GitHub Variable에 추가한 경우 -> EXPO_PUBLIC_API_KEY: ${{ vars.EXPO_PUBLIC_API_KEY }}
  run: yarn env:check
```
3. `./.github/.workflows/pull-ci.yml` 5단계 env 하위에 환경 변수 값 매핑
4. Expo Dashboard > Organization > Environment variables에도 환경 변수 추가

### 2. 환경 변수 사용 방법

```tsx
console.log(process.env.EXPO_PUBLIC_API_KEY);
```

- Expo는 React Native 템플릿에서 환경 변수를 사용할 수 있도록 기본 지원한다.
- 환경 변수를 앱 코드에서 접근하려면 반드시 접두사 `EXPO_PUBLIC_`을 붙여야 하며, 이 접두사가 없는 변수는 번들에 포함되지 않는다.
- 따라서 `EXPO_PUBLIC_` 접두사가 없는 환경 변수는 앱 실행 시 참조할 수 없으며, 오류가 발생한다.


## II. 환경 변수 검증 단계

> 🙂‍↔️ pre-push / pull-ci 단게에서 진행되게 로직을 작성을 했기 때문에 굳이 참고할 필요는 없습니다.

### 1. pre-push

```bash
echo "pre-push / 환경 변수 유효성 검증...";   yarn env:check:light || exit 1     # 3. 환경 변수 유효성 검증
```

- push 이벤트가 발생했을 때 git-hook이 이를 감지하여 3단계에서 환경 변수 유효성 검증을 수행한다.
- pre-push 단계에서 수행하는 이유는 CI 단계에서 파악하는 것보다 통합 개발 환경 터미널에서 로그 단계에 바로 파악하기 위함입니다.

### 2. pull-ci

```yaml
# 5. 환경 변수 유효성 검증 단계
- name: Env Check
  if: ${{ github.event_name == 'pull_request' }}
  env:
    NODE_ENV: ${{ secrets.NODE_ENV }}
    ENV_REPORT_JSON: env-report.json
  run: yarn env:check
```

- CI 파이프라인에서도 한 번 더 검증을 환경 변수 유효성 검증을 수행하게 됩니다.
- 한 번 더 검증을 하는 이유는 환경 변수는 보안과 관련되었기 때문에 신뢰성 증가와 더불어 리포트를 생성하기 위함입니다.