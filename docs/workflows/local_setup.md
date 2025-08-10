# 로컬 환경 준비

프로젝트를 Git과 같은 분산 버전 관리 시스템으로 운영하면 원격 저장소와 로컬 저장소의 코드 내용이 달라질 수 있다. <br/>
특히, `node_modules` 처럼 용량이 큰 의존성 폴더는 `.gitignore`에 추가해 원격 저장소에 반영하지 않는 것이 일반적이다. 개인 프로젝트에서는 큰 문제가 발생하지는 않지만, 팀 프로젝트에서는 해당 폴더가 공유되지 않아 `git pull` 후 오류가 발생할 수 있다. <br />
따라서 모든 팀원이 동일한 **로컬 환경 준비 과정**을 숙지하고 실행하는 것은 매우 중요함!

<br />

## I. Node.js / Yarn 버전 확인

### 1. Node.js

**① Node.js 버전 확인**

```bash
node --version # or node -v
```

> ⚠️ 해당 프로젝트의 Node.js 버전은 22.18.0으로 진행 중 이 버전이 아닐 경우 Node.js 버전 업데이트 해야된다는 말!!

<br />

**② nvm 리스트 확인**

```bash
nvm list # or nvm ls
```

- 위 명령어를 통해 현재 로컬 환경에 설치된 Node.js 버전 목록을 확인할 수 있음
- 만약, `lts/jod -> v22.18.0 (-> N/A)`와 같이 출력되면 아래 명령어를 통해 NVM에 Node.js 22.18.0 버전 설치할 것!!

<br />

```bash
nvm install 22.18.0
```

<br />

```bash
# 22.18.0 버전이 설치 안 된 상태에서 nvm use를 사용하면 경고가 떠버리기 때문에 위 명령어로 설치하라는거!!
N/A: version "22.18.0" is not yet installed.
You need to run "nvm install 22.18.0" to install it before using it.
```

<br />

**③ Node.js 버전 적용**

```bash
cd smart-parking-fe  # 현재 VSC 터미널 디렉토리 위치가 smart-parking-fe면 무시
nvm use              # 해당 명령어를 통해 Node.js 버전 적용하기
```

<br />

> ⚠️ `nvm use` 명령어를 한다고 모든 터미널에서 버전이 바뀌는거는 아님
> 모든 터미널 환경에서 동일한 Node.js 버전을 유지하고 싶다면 다음 명령어 수행:

<br />

```bash
# VSC 터미널이 아닌 cmd + space로 열린 터미널에서 적용할 것!!
nvm alias default 22.18.0
```

<br />

### 2. Yarn

**① Yarn 버전 확인**

```bash
brew search yarn   # Yarn 패키지 매니저 설치 여부 확인
brew install yarn  # Yarn 패키지 매니저 설치 (없을 경우에만 실행)

# Yarn 패키지 매니저 버전 확인
# 반드시 1.x.x 여부 확인하기 (1.x.x로 시작하지 않으면 현재 Yarn 2를 쓰고 있다는 의미이기 떄문에)
yarn --version
```

- Yarn 버전이 1.22.22가 아닐 경우에는 Yarn 업그레이드 또는 버전 변경 필요!!

<br />

**② Yarn 버전 업그레이드**

```bash
brew upgrade yarn  # 최신 Yarn LTS 버전으로 업데이트 시킴 (반드시 버전 확인 후 실행)
```

<br />

```bash
# Yarn 2 버전을 쓰고 있을 경우에만 확인
### VSC 터미널 -> 단점. 현재 터미널에서만 Yarn 버전 적용됨
yarn set version classic
yarn --version # or yarn -v

### 전역 -> 장점. 모든 터미널 환경에서 동일한 Yarn 버전 공유
brew reinstall yarn
```

<br />

## II. `yarn install` 명령어를 통한 의존성 설치

- `git pull`로 원격 저장소의 변경 사항을 로컬 환경에 반영하면, 로컬의 `node_modules`와 `package.json`, `yarn.lock` 내용이 서로 다를 가능성이 매우 높다.
- 왜냐하면, 팀원이 기능 개발 도중 필요한 패키지(라이브러리)를 설치하거나 의존성을 변경했을 수도 있기 때문이다.
- 따라서, 원격 저장소 내용을 로컬에 반영한 후에는 가장 먼저 `yarn install` 명령어를 실행하여 의존성을 동기화해야 한다.

<br />

## III. 개발 서버 실행

```jsonc
// Smart Parking scripts에 적힌 명령어 설명
"scripts": {
  "start": "expo start", // Expo 개발 서버 실행(Expo Go, Android, iOS 등 네비게이터 역할)
  "android": "expo android", // Expo - Android 에뮬레이터 실행 명령어
  "ios": "expo ios" // Expo - iOS 시뮬레이터 실행 명령어
  // 이하 Scripts의 명령어는 상관 안써도 됨 (대부분 pre-push, pre-commit, pull-ci에서 사용되는 명령어이기 때문)
},
```

- 개발 서버는 로컬 환경에서 수정한 코드를 실시간으로 확인할 수 있도록 가상의 서버를 실행하는 것을 의미함
- 개발 서버 실행 명령어 같은 경우에는 `package.json`의 `scripts`에 명시가 되어있기 때문에 확인해서 실행 하면 됨
- 그리고 Smart Parking 프로젝트는 Yarn 패키지를 사용하기 때문에 `yarn run <commend>` 또는 `yarn <commend>` 이렇게 실행하는거 주의!!

<br />

## IV. `.env` 환경 내용 확인

> ⚠️ pull-ci에 환경 변수 검증 단계가 포함되어 있으므로, 반드시 본인의 로컬 환경에 올바르게 반영해야 함!!

- `.env` 파일은 로컬 환경에서 필요한 환경 변수를 설정하는 파일이다.
- 이 파일에는 시크릿 키 등 외부에 노출되면 안 되는 민감한 정보가 포함되므로, `.gitignore`에 등록하여 원격 저장소에 업로드하지 않음
- 이로 인해 팀원 간 동일한 `.env` 값을 공유하기 위해서는, 변경 사항이 있을 때마다 별도의 안전한 경로를 통해 전달받아 로컬 환경에 수동으로 반영해야 함!!