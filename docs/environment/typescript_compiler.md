# 🕵️‍♂️ TypeScript Compiler 개요

### 🤔 TypeScript 컴파일러(Compiler) 이해

TypeScript는 컴퓨터가 이해할 수 있는 기계어(Machine Code)로 번역하는 것이 아닌 JavaScript 언어로 번역된다. 이 JavaScritp 언어로 번역되기 위한 일련의 과정을 거쳐야 하는데 그것이 바로 컴파일러(Compiler)이다.

> **💡 컴파일러(Compiler)** <br />
> 컴파일러는 고수준 언어(High-level Programming)로 작성된 프로그래밍 언어를 기계어로 번역하기 위해 거치는 일련의 과정을 의미한다. 컴파일러는 명령어 한 줄씩 해석해서 기계어로 번역하는 것이 아닌, 문서 전체의 내용을 한 번에 기계어로 해석한다. 이로 인해, 초기 속도는 느리지만, 이후 속도는 인터프리터(Interpreter) 해석 방식에 비해 매우 빠르다.

<br />

### 🇰🇷 TypeScript 타입 시스템(Type System) 이해

컴파일러(Compiler) 과정을 거쳐서 JavaScript 언어로 해석이 되야 하는데 TypeSciprt는 다른 컴파일 언어와 다르게 JavaScript로 해석할 수 있는 컴파일러 옵션(Compiler Options)들을 제공한다. 이유는 바로 TypeScript는 기존 JavaScritp의 동적 타입 시스템(Dynamic Type System)을 단점을 보완하기 위해 나온 언어이며 JavaScript의 슈퍼셋(Superset) 언어이기 때문에 점진적 타입 시스템(Gradual Type System)을 제공하기 때문이다.

> **💡 점진적 타입 시스템(Gradual Type System)** <br />
> 점진적 타입 시스템은 정적 타입 시스템과 동적 타입 시스템의 특성을 결합한 방식으로, 변수나 표현식의 타입을 개발자가 직접 명시할 수도 있고, 생략(타입 추론, 제네릭 등)할 수도 있다.

<br />

## I. TypeScript 컴파일러(Compiler) 구성 설명
```json
{
  "exclude": ["node_modules"],
  "include": ["**/*.ts", "**/*.tsx", ".expo/types/**/*.ts", "expo-env.d.ts", "nativewind-env.d.ts"],
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "baseUrl": "./src",
    "target": "es2020",
    "module": "nodenext",
    "moduleResolution": "nodenext",
    "lib": ["ES2020"],
    "strict": true,
    "outDir": "dist",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true,
    "useDefineForClassFields": true,
    "paths": {
      "@/*": ["*"],
      "@app/*": ["app/*"],
      "@entities/*": ["entities/*"],
      "@features/*": ["features/*"],
      "@shared/*": ["shared/*"],
      "@widgets/*": ["widgets/*"]
    }
  }
}
```

<br />

### 📁 컴파일 옵션 종류

| 옵션 | 우선순위 | 설명 |
| --- | --- | --- |
| **`files`** | 1 | 컴파일할 개별 파일 목록을 명시 (확장자 포함, 배열 형태로 지정) |
| **`exclude`** | 2 | 컴파일 대상에서 제외할 파일 또는 디렉토리 경로 목록 (배열 형태로 지정) |
| **`include`** | 3 | 컴파일 대상에 포함할 파일 또는 디렉토리 경로 목록 (배열 형태로 지정) |
| **`extends`** | - | 다른 `tsconfig.json` 파일을 상속하여 설정을 확장할 수 있음 |
| **`comilerOptions`** | - | 타입스크립트 컴파일러 동작을 제어하는 핵심 옵션들을 설정하는 객체 |

<br />

### 🚥 compilerOptions 설명
| 옵션 | 설명 |
| --- | --- |
| **`baseUrl`** | 모듈을 불러올 때 기준이 되는 기본 경로 지정 |
| **`paths`** | 경로 별칭 설정 |
| **`target`** | 컴파일 결과물의 JavaScritp 버전 지정(es2020 -> ECMAScript 2020 버전으로 해석) |
| **`module`** | 사용할 모듈 시스템 지정(nodenext -> CommonJS + ESModule 방식 둘 다 지원) |
| **`moduleResolution`** | 모듈 해석 방식 설정(nodenext -> CommonJS + ESModule 방식 모두 해석) |
| **`comilerOptions`** | 타입스크립트 컴파일러 동작을 제어하는 핵심 옵션들을 설정하는 객체 |
| **`strict`** | 엄격한 타입 검사 모드 전체 활성화 (대표적인 Any 타입 비활성화 등) |
| **`outDir`** | 컴파일된 JavaScript 파일 출력 경로(빌드 결과물 생성 디렉토리라고 생각하면 됨) |
| **`esModuleInterop`** | CommonJS 모듈을 ESModule 스타일로 가져오기(import) 가능하게 함 |
| **`allowSyntheticDefaultImports`** | default export가 없어도 default import 가능하게 함 |
| **`resolveJsonModule`** | JSON 파일을 모듈처럼 가져오기(import) 가능하게 함 |
| **`skipLibCheck`** | 외부 라이브러리 타입 검사 생략 |
| **`noUnusedLocals`** | 사용하지 않는 지역 변수에 대해 에러 표시 |
| **`noUnusedParameters`** | 사용하지 않는 함수 매개변수에 대해 에러 표시 |
| **`noFallthroughCasesInSwitch`** | switch 문에서 break 없는 fallthrough(break 문 못만나서 default까지 내려가는 현상) 방지 |
| **`forceConsistentCasingInFileNames`** | 파일명 대소문자 일관성 강제 |
| **`useDefineForClassFields`** | 클래스 필드 정의 시 define 방식 사용 |

<br />

## II. 참고자료

- [조계원 Notion | 컴파일(Compiled) 언어](https://gye-won.notion.site/Compiled-23688bd9c3fa8049824cddcf19cbae46?pvs=74)
- [조계원 Notion | 인터프리터(Interpreter) 언어](https://gye-won.notion.site/Interpreter-23688bd9c3fa80108bf6fa84d3c03104)
- [조계원 Notion | 타입 시스템](https://gye-won.notion.site/Type-System-23688bd9c3fa805c8a20dc50b5d243a2)
- [조계원 Notion | TypeScript 컴파일러 옵션(Compiler Options)](https://gye-won.notion.site/TypeScript-Compiler-Options-23688bd9c3fa81b9ae1ec91fa6cffe3a)