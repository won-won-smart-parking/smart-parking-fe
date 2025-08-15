import { View } from "react-native";
import { elevation } from "@shared/tokens";
import Text from "@shared/ui/atoms/text";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text variant="display-default">Hello, World!</Text>
      <Text variant="heading-lg">Hello, World!</Text>
      <Text variant="caption-lg">Hello, World123!</Text>
      <Text variant="caption-lg" className="text-xs-long text-blue-400">
        Hello, World123!
      </Text>
      <Text className="text-blue-400" variant="caption-lg">
        Hello, Wor123ld!
      </Text>
      <View className="h-12 w-12 border-2 bg-blue-400" style={elevation.bottom}>
        <Text variant="caption-lg" className="text-neutral-100">
          ASD
        </Text>
      </View>
    </View>
  );
}
