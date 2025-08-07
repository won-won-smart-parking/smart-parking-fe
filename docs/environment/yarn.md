# 🕵️‍♂️ Yarn 개요

Yarn 패키지 관리자(Package Manager)는 JavaScript 및 TypeScript 프로젝트에서 사용되는 패키지들의 의존성을 효율적으로 관리해주는 Node.js 기반의 패키지 관리자이다.

<br />

>💡 `yarn.lock` 파일
>---
> - `yarn.lcok` 파일은 설치된 모듈의 버전을 저장해 어디서나 같은 버전과 구조의 의존성을 가지게 해주는 파일
> - Yarn에서 자동으로 yarn.install 명령어 수행 시 자동으로 생성해줌
> - `package-lock.json`과 동일한 역할을 수행

<br />

>💡 패키지 관리자(Package Manager)
>---
> 패키지 관리자(Package Manager)는 개발자가 사용하는 외부 라이브러리(패키지)를 프로젝트에 쉽게 통합할 수 있도록 도와주는 도구이다. 주요 기능으로는 패키지의 **검색**, **설치**, **업그레이드**, **제거**, 그리고 **의존성 관리**가 있으며, 이를 통해 일관된 개발 환경을 유지하고 효율적인 소프트웨어 개발이 가능해진다.
>
>■ 패키지 관리자(Package Manger) 참고사항
>- 일반적으로 명령어 기반 CLI를 통해 동작하며, package.json 같은 메타데이터 파일을 사용해 패키지 목록과 버전 정보를 관리한다.
>- 또한, 중복 설치를 방지하고, 동일한 버전의 패키지를 여러 프로젝트에서 효율적으로 재사용할 수 있도록 캐시 및 모듈 해석 시스템을 제공한다.

<br />

## I. Yarn 패키지 관리자 설치 및 확인
```bash
brew search yarn  # 패키지 설처 여부 확인
brew install yarn # yarn 패키지 매니저 설치
yarn --version    # yarn 패키지 버전 확인
brew upgrade yarn # yarn 패키지 버전 업데이트
```
> ‼️ MacOS 터미널에서 설치 <br />
> ‼️ 설치되어 있다면 설치 안해도 됨 <br />
> ‼️ 조계원 Yarn 버전 1.22.22 (2025.08.08 기준 최신 LTS 버전) - 버전은 맞추기!! <br />

## II. Yarn 패키지 관리자 사용법
### 1. Yarn - 초기화
```bash
yarn init
```

- 프로젝트를 시작할 때 초기화 (사용 안함)

<br />

### 2. Yarn - 프로젝트 의존성 설치
```bash
yarn
# or
yarn install
```

- 원격 저장소(Github)에는 node_modules 폴더가 포함되지 않음
- 이로 인해, 팀원의 코드나 자신의 코드를 클론하거나 풀(Pull) 했을 때,
- package.json과 yarn.lock에 정의된 의존성 패키지들을 다시 설치해야 함
- 그래서 기본적으로 풀(Pull) 했을 때 사용해야 되는 명령어!!

<br />

### 3. Yarn - 패키지 추가
① 기본 설치
```bash
yarn add [package]
yarn add [package]@[version]
yarn add [pacakge]@[tag]
```

- 원하는 패키지를 dependencies 항목에 추가하고 설치함
- 특정 버전이나 릴리즈 태그도 지정 가능

<br />

② 의존성 범위 설정
```bash
yarn add [package] --dev       # 개발용 의존성
yarn add [package] --peer      # 호환성 요구 의존성
yarn add [package] --optional  # 선택적 의존성
```

- 패키지들의 목적에 따라 개발 의존성(devDependencies), 호환 의존성(peerDependencies), 선택적 의존성(optionalDependencies)으로 분류하여 설치

<br />

### 4. Yarn - 패키지 업데이트
```bash
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```

### 5. Yarn - 패키지 제거
```bash
yarn remove [package]
```

## III. 참고 자료
- [Yarn 설치 및 사용법 | HEROPY.DEV](https://www.heropy.dev/p/ijqX9h)
- [조계원 Notion | Package Manager](https://gye-won.notion.site/23788bd9c3fa8083bb2ad227c0ee12c8)
- [조계원 Notion | Yarn](https://gye-won.notion.site/Yarn-23788bd9c3fa81129958cef9694a4ec3?pvs=74)