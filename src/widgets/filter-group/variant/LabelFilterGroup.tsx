import { View } from "react-native";
import { Chip, Text } from "@shared/ui/atoms";

interface Props {
  title: string;
  children: React.ReactElement<typeof Chip> | React.ReactElement<typeof Chip>[];
}

// 라벨(Label)을 함께 표시하는 Filter Group 컴포넌트
export default function LabelFilterGroup({ title, children }: Props) {
  return (
    <View className="gap-1">
      <Text typography="description-md">{title}</Text>

      {/* Filter 버튼 구성 레이아웃 */}
      <View className="flex-row flex-wrap gap-3 py-2">{children}</View>
    </View>
  );
}
