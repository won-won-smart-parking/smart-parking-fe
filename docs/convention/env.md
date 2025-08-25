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
1. (필수) `./scripts/env-check/schemas/public.ts` 파일에 Zod 스키마 값을 추가한다.

### 2. 환경 변수 사용법

```tsx
import { EXPO_PUBLIC_API_KEY } from "@env";

console.log(EXPO_PUBLIC_API_KEY);
```

- react-native-dotenv를 통해 .env에 정의된 Public 환경 변수를 RN 앱 코드에서 위와 같이 불러올 수 있다.

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
```

- CI 파이프라인에서도 한 번 더 검증을 환경 변수 유효성 검증을 수행하게 됩니다.
- 한 번 더 검증을 하는 이유는 환경 변수는 보안과 관련되었기 때문에 신뢰성 증가와 더불어 리포트를 생성하기 위함입니다.