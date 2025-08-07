# 🕵️‍♂️ ESLint 개요

ESLint는 컴파일 이전 단계에서 코드를 정적으로 분석하여, 코드 규칙 위반･문법 오류 잠재적 버그 등을 사전에 찾아 경고하거나 오류를 표시하여 코드 품질과 일관성을 향상시킬 수 있는 코드 린트(Code Lint) 도구이다.

## 적용한 ESLint Rules
```javascript
rules: {
  // ⚠️ 경고 수준 Lint Rules
  'for-direction': 'warn',
  'no-async-promise-executor': 'warn',
  'no-compare-neg-zero': 'warn',
  'no-constant-condition': 'warn',
  'no-empty-pattern': 'warn',
  'no-self-assign': 'warn',
  'no-unsafe-finally': 'warn',
  'no-console': 'warn',
  'no-debugger': 'warn',

  // ❌ 오류 수준 Lint Rules
  'constructor-super': 'error',
  'getter-return': 'error',
  'no-class-assign': 'error',
  'no-const-assign': 'error',
  'no-dupe-args': 'error',
  'no-dupe-class-members': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-ex-assign': 'error',
  'no-func-assign': 'error',
  'no-import-assign': 'error',
  'no-new-native-nonconstructor': 'error',
  'no-obj-calls': 'error',
  'no-this-before-super': 'error',
  'no-unreachable': 'error',
  'use-isnan': 'error',
  'valid-typeof': 'error',
}
```

### ⚠️ 경고 수준 ESLint 규칙

| 규칙 종류 | 설명 | 적용 값 |
|--|--|--|
|for-direction | 무한 루프가 발생할 수 있는 경우 방지 규칙 | warn |
|no-async-promise-executor | Promise 생성자 실행 함수에서 async 사용 금지 규칙 | warn |
|no-compare-neg-zero | -0과 비교 방지 규칙 | warn |
|no-constant-condition | 조건문에 상수 값만 사용 방지 규칙 | warn |
|no-empty-pattern | 비구조화 할당에서 빈 패턴 사용 방지 규칙 | warn |
|no-self-assign | 변수나 속성을 자기 자신에게 할당 방지 규칙 | warn |
|no-unsafe-finally | finally 블록 내에서 제어 흐름 변경 방지 규칙 | warn |
|no-console | console.log 등 콘솔 메서드 사용 제한 방지 규칙 (빌드 이전에 지워야 하기 때문에 적용함) | warn |
|no-debugger | debugger 구문 사용 금지 규칙 (빌드 이전에 지워야 하기 때문에 적용함) | warn |

### ❌ 오류 수준 ESLint 규칙

> 오류 수준의 규칙은 CI 단계에서 감지도리 경우 빌드를 중단시키고 코드 병합을 차단할 수 있다.

| 규칙 종류 | 설명 | 적용 값 |
|--|--|--|
|constructor-super| 파생 클래스의 생성자에서 super()를 누락하거나 잘못 호출하는 것을 방지 | error |
|getter-return| getter 메서드에서 반드시 값을 반환하도록 강제 | error |
|no-class-assign| 클래스 식별자에 재할당하는 것을 방지 | error |
|no-const-assign| const로 선언된 변수에 재할당하는 것을 방지 | error |
|no-dupe-args| 함수 정의에서 중복된 매개변수 이름 사용을 방지 | error |
|no-dupe-class-members| 클래스 내에서 동일한 이름의 멤버를 중복 정의하는 것을 방지 | error |
|no-dupe-keys| 객체 리터럴에서 중복된 키 정의를 방지 | error |
|no-duplicate-case| switch 문에서 중복된 case 값을 방지 | error |
|no-ex-assign| catch 구문의 예외 변수에 재할당하는 것을 방지 | error |
|no-func-assign| 함수 선언문 또는 함수 식별자에 재할당하는 것을 방지 | error |
|no-import-assign| import한 바인딩에 재할당하는 것을 방지 | error |
|no-new-native-nonconstructor| Symbol 등 생성자가 아닌 네이티브 객체에 new를 사용하는 것을 방지 | error |
|no-obj-calls| Math, JSON 등 객체를 함수처럼 호출하는 것을 방지 | error |
|no-this-before-super| 파생 클래스 생성자에서 super() 호출 전에 this를 사용하는 것을 방지 | error |
|no-unreachable| return, throw, continue, break 뒤에 도달 불가능한 코드 방지 | error |
|use-isnan| NaN 비교 시 isNaN() 함수를 사용하도록 강제 | error |
|valid-typeof| typeof 결과를 잘못된 문자열과 비교하는 것을 방지 | error |
|"@typescript-eslint/no-explicit-any| TypeScript Any 타입 명시적 선언 방지 | error |