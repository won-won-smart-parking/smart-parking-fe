import { View } from "react-native";
import { FloatingButton } from "@shared/ui/atoms";

// Floating Button Group의 children 속성은 Floating Button 컴포넌트로 타입을 좁힘
interface Props {
  children: React.ReactElement<typeof FloatingButton> | React.ReactElement<typeof FloatingButton>[];
}

export default function FloatingButtonGroup({ children }: Props) {
  return <View className="flex-row items-center justify-between">{children}</View>;
}
