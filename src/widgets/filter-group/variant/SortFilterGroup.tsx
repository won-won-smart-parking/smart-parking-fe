import { View } from "react-native";
import { Chip } from "@shared/ui/atoms";

interface Props {
  children: React.ReactElement<typeof Chip> | React.ReactElement<typeof Chip>[];
}

// 정렬 옵션을 위한 Filter Group 컴포넌트
export default function SortFilterGroup({ children }: Props) {
  return <View className="flex-row gap-4">{children}</View>;
}
