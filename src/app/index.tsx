import { View } from "react-native";
import Text from "@/shared/tokens/typography/Text";
import { Tag } from "@/shared/ui/atoms";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text variant="display-default">Hello, World!</Text>
      <Text variant="heading-lg">Hello, World!</Text>
      <Text variant="caption-lg">Hello, World123!</Text>
      <Text variant="caption-lg">Hello, World!</Text>
      <Text variant="caption-lg">Hello, Wor123ld!</Text>
      <Tag status="available" />
      <Tag status="busy" />
      <Tag status="full" />
    </View>
  );
}
