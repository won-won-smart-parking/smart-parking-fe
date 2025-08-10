import { View } from "react-native";
import { elevation } from "@/shared/tokens/effect/elevation";
import Text from "@/shared/tokens/typography/Text";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center" style={elevation.active}>
      <Text variant="display-default">Hello, World!</Text>
      <Text variant="heading-lg">Hello13123123 World!</Text>
      <Text variant="caption-lg">Hello, World123!</Text>
      <Text variant="caption-lg">Hello, World!</Text>
      <Text variant="caption-lg">Hello,1231312321312 Wor123ld!</Text>
    </View>
  );
}
