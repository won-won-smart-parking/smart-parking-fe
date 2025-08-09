import { View } from "react-native";
import { elevation } from "@/shared/tokens/effect/elevation";
import Text from "@/shared/tokens/typography/Text";

export default function Index() {
  let a: number = 123;

  return (
    <View className="flex-1 items-center justify-center" style={elevation.active}>
      <Text variant="display-default">{a}</Text>
      <Text variant="heading-lg">Hello, World!</Text>
      <Text variant="caption-lg">Hello, World123!</Text>
      <Text variant="caption-lg">Hello, World!</Text>
      <Text variant="caption-lg">Hello, Wor123ld!</Text>
    </View>
  );
}
