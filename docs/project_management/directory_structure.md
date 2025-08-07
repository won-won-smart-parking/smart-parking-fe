# 🗂️ 디렉토리 구조

프로젝트를 진행하는 데 있어 디렉토리 구조는 매우 중요함. 만약, 팀원마다 각자 스타일대로 구조를 구성하거나, 개인 프로젝트에서도 명확한 기준 없이 작업을 진행한다면, 디렉토리의 깊이(Depth)나 불명확한 폴더 명칭으로 인해 "필요한 모듈이 어디있지?", "이 기능은 어떤 파일을 수정해야 하지?" 등과 같은 문제가 발생하게 되기 때문이다.

## 🚘 Smart Parking 디렉토리 구조
```
SMART-PARKING-FE
└──src/
    ├── app/             # Expo Router 기반 파일 라우팅 (FSD의 pages 역할)
    │   ├── (tabs)/main.tsx
    │   └── _layout.tsx
    ├── global/          # 전역 초기화 레이어 (FSD: app)
    │   ├── theme/
    │   ├── styles/
    │   │   └── global.css
    │   └── providers/
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

### 1. `app/`

Expo Router 파일 기반 라우팅을 담당합니다.
- React Native에서 페이지 단위를 구성하는 루트 디렉토리
- 기존 FSD 아키텍처의 app + pages 기능을 담당

### 2. `global/`

```
global/
├── theme/        // 색상, 타이포그래피, 디자인 토큰 등
├── styles/       // 글로벌 스타일, NativeWind 초기화
├── providers/    // 전역 Provider (예: Zustand, React Query 등)
```

전역 설정 및 초기화 로직을 포함하는 레이어입니다.
- 전역 스타일 및 타입, 프로바이더 등의 앱 초기 구성 요소를 포함
- 기존 FSD 아키텍처의 app 기능을 담당

### `process/`

```
process/
└── register/     // 예: Step1 → Step2로 이어지는 회원가입 흐름
```

여러 페이지와 기능이 결합된 사용자 흐름을 구성하는 레이어입니다.
- 회원가입, 예약 등 순차적 단계 또는 조건 기반 UI 흐름을 정의
- 단순 기능이 아닌, 복합적인 사용자 여정을 포함

### `widgets/`

```
widgets/
└── ParkingLotCard/   // 주차장 정보를 보여주는 독립 블록
```

페이지를 구성하는 재사용 가능한 UI 블록입니다.
- 여러 개의 feature, entity를 조합하여 만드는 중간 UI 단위
- 예: 카드, 리스트, 요약 박스, 배너 등

### `features/`

```
features/
└── reservation/
    ├── model/             // 예약 관련 상태, API 로직
    └── ui/
        ├── atoms/         // 기능 전용 작은 단위 UI
        ├── molecules/     // 중간 구성 UI
        └── organisms/     // 예약 폼, 완료 박스 등 복합 UI
```

비즈니스 로직 단위의 독립 기능 모듈입니다.
- 특정 기능(예약, 결제 등)에 필요한 상태, 로직, UI를 포함
- 내부적으로 UI는 Atomic Design System에 따라 계층화

### `entities/`

```
entities/
└── user/
    ├── model/           // 사용자 상태, API, 인증 관련 로직
    │    ├── user.store.ts        // Zustand 등 상태 로직
    │    ├── user.api.ts          // API 요청 관련 코드
    │    ├── user.types.ts        // 도메인 타입 정의
    │    └── useUser.ts           // 상태 및 API 통합 커스텀 훅 (선택적)
    └── ui/
        ├── atoms/       // Avatar, NameTag 등
        └── molecules/   // UserProfile, UserCard 등
```

도메인 중심의 상태 및 모델 레이어입니다.
- 사용자, 주차장 등 핵심 도메인 객체의 상태 / 로직 / UI를 정의
- UI는 내부적으로 Atomic 구조로 나뉘지만, entity 내부에만 사용

### shard/

```
shared/
├── ui/
│   ├── atoms/           // Button, Text, Input 등 가장 작은 단위 UI
│   ├── molecules/       // LabelInput, IconButton 등 중간 UI
│   ├── organisms/       // Modal, BottomSheet 등 복합 UI
│   └── templates/       // 페이지 구조나 큰 틀의 템플릿 구성
├── hooks/               // 전역 커스텀 훅
├── lib/                 // 전역 유틸 함수 (예: formatDate, debounce 등)
├── config/              // 전역 설정, enum, 상수
└── images/              // 전역 이미지 리소스 (일러스트, 아이콘, 배경 등)
```

도메인과 기능에 종속되지 않는 전역 재사용 요소 모음입니다.
- 디자인 시스템, 전역 커스텀 훅, 유틸 함수, 설정, 이미지(기본 이미지 + 아이콘) 등을 포함
- 어디서든 재사용 가능한 요소만 이곳에 위치시킨다.
