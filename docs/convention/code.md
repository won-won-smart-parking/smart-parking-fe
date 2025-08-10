# I. React Native 코드 컨벤션

### 1. 컴포넌트(Component)
```
shared/             
  └── ui/            
    └── Button.tsx  # 컴포넌트 이름은 반드시 파스칼 케이스(PascalCase)로 작성할 것
```
```tsx
// 컴포넌트 함수명은 반드시 파스칼 케이스(PascalCase)로 작성할 것
function Button() {
  return (
    {/* ... */}
  );
}
```

- 관련된 컴포넌트를 하나의 파일에 모아두지 말고, 독립적인 모듈로 작성할 것!!
- React Native의 컴포넌트 이름은 반드시 대문자로 시작해야 한다.
- 이는 React에서 `React.createElement()`를 통해 컴포넌트를 생성하는데, 이름이 소문자로 시작하면 기본 태그로 인식하고, 대문자로 시작해야 사용자 정의 컴포넌트로 인식하기 때문이다.

<br />

### 2. 커스텀 훅(Custom Hook)
```tsx
import React, { useState, useEffect } from 'react';
import { View, Button, Text, Alert } from 'react-native';

export default function ClickCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 5) {
      Alert.alert('알림', '버튼을 너무 많이 눌렀습니다!');
      setCount(0);
    }
  }, [count]);

  return (
    <View>
      <Text>클릭 횟수: {count}</Text>
      <Button title="눌러주세요" onPress={() => setCount(prev => prev + 1)} />
    </View>
  );
}
```

- 컴포넌트 내부의 상태 관리 로직이 복잡해질 경우, 해당 로직은 커스텀 훅(Custom Hook)으로 분리한다.
- 동일한 상태 관리 로직을 여러 컴포넌트에서 재사용해야 할 경우에도 커스텀 훅(Custom Hook)으로 분리한다.

<br />

> ⚠️ 커스텀 훅(Custom Hook)은 상태를 **"공유"**하는 것이 아닌 **"독립적인 상태"**로 동작한다.

<br />

### 3. 파생 상태(Derived State) 변수
```tsx
export default function Example() {
  // 복잡하지 않은 상태 → 일반 상태 변수
  const [count, setCount] = useState(0);
  const username = '홍길동'; // 불변의 단순 데이터는 일반 변수로 선언

  // 복잡한 계산이 필요한 파생 상태 → useMemo로 메모이제이션
  const doubledCount = useMemo(() => {
    console.log('복잡한 계산 실행');
    return count * 2;
  }, [count]);

  return (
    {/* ... */}
  );
}
```
- 단순 파생 상태(Derived State)는 일반 변수로 선언
- 비용이 크거나, 빈번한 재연산이 발생하는 파생 상태(Derived State)는 메모이제이션 기법을 통해 선언

<br />

# II. 코드 작성 컨벤션

### 1. 함수 컨벤션
```tsx
function Button() {

  const handlePress = () => {
    console.log("눌림!!");
  }

  return (
    {/* ... */}
  )
}
```

- 컴포넌트는 `function` 키워드를 사용해 함수를 선언한다.
- 컴포넌트 내에서 사용되는 함수는 화살표 함수(Arrow Function)을 통해 선언한다.
- 호이스팅 + 일반 유틸 함수, 컴포넌트를 명확히 분리하기 위한 컨벤션

<br />

# III. 타입 관리 컨벤션

### 1. 가까운 곳에서 타입 관리
```tsx
interface Props extends RNTextProps {
  variant?: TypographyVariant;
  className?: string;
  children: React.ReactNode;
}

// Design Token - Text 컴포넌트 선언
function Text({ variant = "caption-tight", className, children, ...rest }: Props) {
  return (
    <RNText className={clsx(TypographyVariants[variant], className)} {...rest}>
      {children}
    </RNText>
  );
}
```

- 내보내기(export)용 타입 구조를 선언한 것이 아닌 이상은 동일한 파일에서 관리할 것
- 타입은 가까운 곳에서 관리를 해야 불필요한 파일 생성 방지 및 타입 관리 유지가 편리함

<br />

### 2. 외부 모듈 타입 관리
```bash
npm info @types/package-name
# or
yarn inro @types/package-name
```

- 외부 모듈(패키지) 사용 시, 해당 모듈의 `@types` 패키지가 패키지 매니저에 등록되어 있는지 먼저 확인
- `@types` 패키지가 존재하지 않을 경우에만 `*.d.ts` 파일을 생성하여 해당 모듈의 타입을 직접 정의 (global 폴더에 생성할 것)