# Github Actions

Github Actions는 GitHub에서 공식적으로 제공하는 CI/CD 도구이다. <br />
`.github/workflows` 폴더에 작성한 YAML 파일을 기반으로, 빌드･테스트･배포 등 다양한 작업을 자동화하고 손쉽게 관리할 수 있다.

<br />

## 📋 pull-ci 자동화 검증 목록

```bash
# 2. Node.js 설정 (22.18.0 + yarn 캐시) 단계
- uses: actions/setup-node@v4
  with:
    node-version: "22.18.0" # 프로젝트 Node 버전 맞춤
    cache: "yarn"

# 3. yarn 버전 고정 및 확인 (1.22.22) 단계
- run: corepack enable
- run: corepack prepare yarn@1.22.22 --activate
- run: yarn --version

# 4. Yarn 의존성 설치 및 안정성 검증 단계
#  -> --frozen-lockfile: package.json과 yarn.lock 의존성 설치 정보가 불일치할 경우 PR 실패
#  -> --network-timeout: 느린 네트워크 속도로 인한 간헐적 실패 완하 (10분)
- name: Install Dependencies
  run: yarn install --frozen-lockfile --network-timeout 600000

# 5. 환경 변수 유효성 검증 단계
- name: Env Check
  if: ${{ github.event_name == 'pull_request' }}
  env:
    NODE_ENV: ${{ secrets.NODE_ENV }}
    ENV_REPORT_JSON: env-report.json
  run: |
    BASE="${{ github.event.pull_request.base.ref }}"
    if [ "$BASE" = "main" ] || [[ "$BASE" == release* ]]; then
      echo "Full env check for $BASE"
      yarn env:check
    else
      echo "Public-only env check for $BASE"
      ENV_CHECK_MODE=public yarn env:check
    fi

# 6. TypeScript Compiler 타입 체크 단계
- name: TypeScript Typecheck
  run: yarn typecheck 2> ts-error-report.txt

# 7. 엄격한 단위 테스트 검증
- name: Full Regression Test
  run: yarn test:ci

# 8. 의존성 점검 검증 단계
- name: Dependency Audit
  run: yarn audit:ci
  
# 9. ESLint 규칙 검증(경고도 실패 처리)
- name: ESLint
  run: yarn lint:strict -f json -o eslint-report.json

# 10. Prettier 포맷팅 검증 단계
- name: Prettier Formatting
  run: yarn prettier
```

<br />

1. **Node.js 버전 고정**: Node.js 버전(22.18.0)을 지정하고, yarn 캐시를 활성화해 설치 속도 최적화
1. **Yarn 버전 고정**: Yarn 버전을 1.22.22로 고정해 모든 환경에서 동일한 동작 보장
1. **의존성 패키지 설치**: --frozen-lockfile로 패키지 불일치 시 실패 처리, 느린 네트워크 환경 대응
1. **환경 변수 유효성 검사(zod)**: PR 대상 브랜치에 환경 변수 포함 여부 검증
1. **타입 체크(typescript compiler)**: TypeScript 컴파일러로 전역 타입 안전성 검증
1. **Jest + RTL 기반 엄격한 단위 테스트 실행**: 모든 테스트 파일 실행, 실패 시 빌드 차단
1. **의존성 점검(audit)**: 의존성 패키지 보안 취약점 검출 시 빌드 실패
1. **엄격한 Lint 규칙 검사(eslint)**: 경고(Warning)도 허용하지 않는 Lint 여부 검증
1. **Prettir 포맷팅 검사**: 포맷팅 불일치 시 빌드 실패 처리