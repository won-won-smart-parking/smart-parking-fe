import { elevation } from "@/shared/tokens/effect/elevation";
import Text from "@/shared/tokens/typography/Text";
import { View } from "react-native";

export default function Index() {
  let a;

  return (
    <View className="flex-1 justify-center items-center" style={elevation.active}>
      <Text variant="display-default">Hello, World!</Text>
      <Text variant="heading-lg">Hello, World!</Text>
      <Text variant="caption-lg">Hello, World123!</Text>
      <Text variant="caption-lg">Hello, World!</Text>
      <Text variant="caption-lg">Hello, Wor123ld!</Text>
    </View>
  );
}
