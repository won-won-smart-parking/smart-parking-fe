import clsx from "clsx";
import { Pressable, PressableProps, View } from "react-native";
import { elevation } from "@shared/tokens";

interface Props extends PressableProps {
  selected: boolean;
}

export default function Radio({ selected = false }: Props) {
  return (
    <Pressable className="aspect-square w-7 overflow-hidden rounded-full">
      {({ pressed }) => {
        return (
          <View
            className={clsx(
              "flex h-full w-full items-center justify-center",
              selected
                ? pressed
                  ? "bg-neutral-900"
                  : "bg-neutral-1000"
                : pressed
                  ? "bg-neutral-850"
                  : "bg-neutral-700",
            )}
            style={pressed && elevation.active}
          >
            <View className={clsx("h-3 w-3 rounded-full", pressed ? "bg-neutral-200" : "bg-neutral-100")} />
          </View>
        );
      }}
    </Pressable>
  );
}
