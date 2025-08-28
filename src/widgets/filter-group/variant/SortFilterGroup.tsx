import { View } from "react-native";
import { Chip } from "@shared/ui/atoms";

interface Props {
  children: React.ReactElement<typeof Chip> | React.ReactElement<typeof Chip>[];
}

export default function SortFilterGroup({ children }: Props) {
  return <View className="flex-row gap-4">{children}</View>;
}
