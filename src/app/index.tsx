import { View } from "react-native";
import { elevation } from "@/shared/tokens/effect/elevation";
import Text from "@/shared/tokens/typography/Text";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center" style={elevation.active}>
      <Text variant="display-default">Hello, World!</Text>
      <Text variant="heading-lg">Hello, World!</Text>
      <Text variant="caption-lg">Hello, W123orld123!</Text>
      <Text variant="caption-lg">Hello, World!</Text>
      <Text variant="caption-lg">Hello, Wor123ld!</Text>
    </View>
  );
}
