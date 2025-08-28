import { View } from "react-native";
import { Chip, Text } from "@shared/ui/atoms";

interface Props {
  title: string;
  children: React.ReactElement<typeof Chip> | React.ReactElement<typeof Chip>[];
}

export default function LabelFilterGroup({ title, children }: Props) {
  return (
    <View className="gap-1">
      <Text typography="description-md">{title}</Text>
      {children}
    </View>
  );
}
