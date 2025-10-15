import { ScrollView } from "react-native";
import { Chip } from "@shared/ui/atoms";

export interface Props {
  children: React.ReactElement<typeof Chip> | React.ReactElement<typeof Chip>[];
}

// 가로 스크롤이 가능한 Filter Group 컴포넌트입니다.
export default function ScrollFilterGroup({ children }: Props) {
  return (
    <ScrollView horizontal contentContainerStyle={{ alignItems: "center", gap: 8 }} showsHorizontalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
}

/**
 * [ NOTE ]
 * React Native -> ScrollView / FlatList 공통점
 * - 둘 모두 높이 값이 `flex: 1`로 작동하고, 스크롤이 가능한 뷰 레이아웃이다.
 * - [React Native: ScrollView](https://reactnative.dev/docs/scrollview)
 * - [React Native: FlatList](https://reactnative.dev/docs/flatlist)
 *
 * React Native -> ScrollView / FlatList 차이점
 * - ScrollView는 뷰포트에 상관없이 모든 요소를 한 번에 렌더링하기 때문에 성능 저하를 야기한다.
 * - FlatList는 IntersectionObserver와 마찬가지로 감지된 뷰포트 요소들만 렌더링한다.
 *
 * ‼️ ScrollFilterGroup 컴포넌트에서 ScrollView를 사용한 이유 (2025.08.28 기준)
 * React Native 코어 컴포넌트에서 제공하는 두 컴포넌트 모두 스크롤을 할 수 있지만, Filter Group 같은 경우는
 * 뷰포트에 들어온 요소만 굳이 렌더링하지 않아도 되기 때문에 현재 기준에는 ScrollView 컴포넌트를 사용하였다.
 *
 * 다만, FlatList 컴포넌트 같은 경우는 data와 renderItem을 필수 속성으로 받기 때문에 실질적인 비즈니스 로직을 포함하는
 * ScrollFilterGroup 컴포넌트에서는 FlatList 컴포넌트로 리팩토링을 진행할 수도 있다.
 * 왜냐하면 성능면에서 선택을 했다기 보다는 Filter Group 내의 데이터를 컴포넌트 리스트로 구성할 수 있는 장점을 제공하기 때문이다.
 * 이로 인해, 비즈니스 로직을 포함할 때 코드의 가독성 측면과 확장성 측면으로 이 방법이 효율적일 수도 있다는 생각이 들기 때문이다.
 */
