import { View } from "react-native";
import { Text } from "@shared/ui/atoms";

interface Props {
  filterGroupTitle: string;
  children: React.ReactNode;
}

export default function FilterGroup({ filterGroupTitle, children }: Props) {
  return (
    <View>
      {filterGroupTitle && <Text>{filterGroupTitle}</Text>}
      {children}
    </View>
  );
}
