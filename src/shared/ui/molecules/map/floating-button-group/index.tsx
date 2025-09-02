import { View } from "react-native";
import { FloatingButton } from "@shared/ui/atoms";

// Floating Button Group의 children 속성은 Floating Button 컴포넌트로 타입을 좁힘
interface Props {
  children: React.ReactElement<typeof FloatingButton> | React.ReactElement<typeof FloatingButton>[];
}

/**
 * Molecular / Floating Button Group
 *
 * Floating Button Group은 Atom 단위의 FloatingButton만 자식으로 받아 일관된 레이아웃을 제공하는 컨테이너 컴포넌트입니다.
 * 각 Floating Button Group 내부에는 FAB 버튼의 개수, 상태, 이벤트 핸들러 등이 상황에 따라 달라질 수 있으므로, FAB 그룹 내부에서는 해당 로직을 포함하지 않습니다.
 *
 * @example
 * <FloatingButtonGroup>
 *    <FloatingButton props... />
 *    <FloatingButton props... />
 * </FloatingButtonGroup>
 *
 * @returns ReactElement FloatingButtonGroup 컴포넌트
 */
export default function FloatingButtonGroup({ children }: Props) {
  return <View className="flex-row items-center justify-between">{children}</View>;
}
