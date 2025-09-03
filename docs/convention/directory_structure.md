# 🗂️ 디렉토리 구조

프로젝트를 진행하는 데 있어 디렉토리 구조는 매우 중요함. 만약, 팀원마다 각자 스타일대로 구조를 구성하거나, 개인 프로젝트에서도 명확한 기준 없이 작업을 진행한다면, 디렉토리의 깊이(Depth)나 불명확한 폴더 명칭으로 인해 "필요한 모듈이 어디있지?", "이 기능은 어떤 파일을 수정해야 하지?" 등과 같은 문제가 발생하게 되기 때문이다.

<br />

## 🚘 Smart Parking 디렉토리 구조
```
SMART-PARKING-FE
└──src/
    ├── app/             # Expo Router 기반 파일 라우팅 (FSD의 pages 역할)
    │   ├── (tabs)/main.tsx
    │   └── _layout.tsx
    ├── global/          # 전역 초기화 레이어 (FSD: app)
    │   ├── theme/
    │   └── styles/
    │       └── global.css
    ├── process/         # 사용자 흐름 조합 (FSD: process)
    │   └── register/
    ├── widgets/         # 조합 UI 블록 (FSD: widgets)
    │   └── ParkingLotCard/
    ├── features/        # 기능 단위 (FSD: features)
    │   └── reservation/
    │       ├── model/
    │       └── ui/
    │           ├── atoms/
    │           ├── molecules/
    │           └── organisms/
    ├── entities/        # 도메인 상태 및 모델 (FSD: entities)
    │   └── user/
    │       ├── model/
    │       └── ui/
    │           ├── atoms/
    │           └── molecules/
    └── shared/          # 전역 재사용 요소 (FSD: shared)
        ├── ui/                 # 디자인 시스템 (Atomic Design 구조)
        │   ├── atoms/
        │   ├── molecules/
        │   ├── organisms/
        │   └── templates/
        ├── lib/
        ├── config/
        └── images/
```

Smart Parking 프로젝트는 FSD 아키텍처 구조와 Atomic Design System를 결합하여 유지보수성과 재사용성을 모두 고려한 아키텍처로 구성했습니다.

<br />

### 1. `app/`

```
app/             # Expo Router 기반 파일 라우팅 (FSD의 pages 역할)
  ├── (tabs)/main.tsx
  └── _layout.tsx
```

`app/` 디렉토리는 Expo Router의 파일 기반 라우팅을 담당하는 레이어로, 각 페이지와 레이아웃 컴포넌트가 이곳에 정의됩니다.
최상위 `_layout.tsx`에서는 전역 Provider를 래핑하여 앱의 공통 환경을 구성합니다.

<br />

### 2. `entities/`

```
entities/                   # 도메인 상태/모델 레이어
└── user/
    └── model/
        ├── user.types.ts   # 사용자 도메인 타입 정의
        ├── user.api.ts     # 사용자 관련 API 모듈
        └── user.store.ts   # 사용자 전역 상태 관리
```

`entities/` 디렉토리는 특정 도메인에 종속된 상태(State), 타입(Types), API 등을 관리하는 레이어입니다.
각 도메인의 데이터 원천을 정의하며, UI 코드와 사용자 정의 훅(Custom Hooks)은 포함하지 않습니다.

<br />

### 3. `features/`

```
features/             # 기능 단위 모듈
└── auth/
    ├── input-field/
    │   ├── EmailInputField.tsx
    │   ├── PasswordInputField.tsx
    │   ├── useEmailInput.ts
    │   └── usePasswordInput.ts
    ├── form/
    │   ├── SignInForm.tsx
    │   ├── SignUpForm.tsx
    │   └── ResetPasswordForm.tsx
    └── hooks/
        └── useAuth.ts
```

`features/` 디렉토리는 shared/ui의 컴포넌트를 조합하여 비즈니스 로직이 결합된 기능 단위 컴포넌트를 구성하는 레이어입니다.
또한, 해당 기능에 종속된 사용자 정의 훅(Custom Hooks)이 이곳에 위치합니다.

### 4. `global/`

```
global/             # 전역 환경 및 초기화 레이어
├── theme/          # 색상, 타이포그래피 등 디자인 토큰
├── styles/         # 글로벌 스타일, NativeWind 초기화
├── providers/      # 전역 Provider 정의 (예: Zustand, React Query 등)
└── config/         # 앱 전역 설정, 상수
```

`global/` 디렉토리는 앱 전체에서 공통으로 적용되는 환경과 초기화 로직을 관리하는 레이어입니다.
기존 FSD 아키텍처의 app 레이어 중 라우팅을 제외한 역할을 담당합니다.

### 5. `shared/`

```
shared/             # 전역 재사용 요소
├── assets/
├── tokens/
├── types/
└── ui/
    ├── atom/
    │   ├── ...
    │   └── index.tsx
    └── molecules/
        ├── ...
        └── index.tsx
```

`shared/` 디렉토리는 앱 전역에서 재사용 가능한 정적 자원, 디자인 토큰, 타입, UI 컴포넌트를 관리하는 레이어입니다.
특정 도메인이나 기능에 종속되지 않으며, 어디서든 공통으로 활용될 수 있는 요소만 포함합니다.

### 6. `widgets/`

```
widgets/             # 페이지 전용 블록 레이어
└── auth/            
     └── SectionTitle/
         └── index.tsx
```

`widgets/` 디렉토리는 특정 페이지에서만 사용되는 독립적인 UI 블록을 관리하는 레이어입니다.
shared/ui를 조합하거나 도메인 데이터를 주입하여 페이지 단위에서 재사용되는 컨테이너 성격의 컴포넌트를 포함합니다.