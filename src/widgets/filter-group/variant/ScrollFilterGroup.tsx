import { ScrollView } from "react-native";
import { Chip } from "@shared/ui/atoms";

interface Props {
  children: React.ReactElement<typeof Chip> | React.ReactElement<typeof Chip>[];
}

export default function ScrollFilterGroup({ children }: Props) {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{ alignItems: "center", gap: 8 }}
      showsHorizontalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
}
