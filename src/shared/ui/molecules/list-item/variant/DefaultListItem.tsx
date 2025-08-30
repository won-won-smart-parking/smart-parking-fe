import { View } from "react-native";
import { Icon, Text } from "@shared/ui/atoms";
import { IconName } from "@shared/ui/atoms/icon/variant";

interface Props {
  title: string;
  description?: string;
  iconName?: IconName;
}

export default function DefaultListItem({ title, description, iconName }: Props) {
  return (
    <View>
      <View>
        <Text>{title}</Text>
        {description ? <Text>{description}</Text> : null}
      </View>

      {iconName ? <Icon name={iconName} /> : null}
    </View>
  );
}
