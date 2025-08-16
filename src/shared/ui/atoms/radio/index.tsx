import { Pressable, View } from "react-native";
import { elevation } from "@shared/tokens";

export default function Radio() {
  return (
    <Pressable className="aspect-square w-7 overflow-hidden rounded-full">
      {({ pressed }) => {
        return (
          <View className="flex h-full w-full items-center justify-center" style={pressed && elevation.active}>
            <View className={"h-3 w-3 rounded-full bg-neutral-100"} />
          </View>
        );
      }}
    </Pressable>
  );
}
