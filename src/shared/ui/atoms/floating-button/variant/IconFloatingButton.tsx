import { type PressableProps } from "react-native";
import { Button } from "@shared/ui/atoms";
import type { IconName } from "@shared/ui/atoms/icon/variants";
import { preset } from "../foundation/preset";

export interface Props extends PressableProps {
  iconName: IconName;
  selected: boolean;
}

export default function IconFloatingButton({ iconName, selected, onPress }: Props) {
  return (
    <Button
      variant="icon"
      iconName={iconName}
      palette={
        !selected
          ? {
              bgColor: "bg-neutral-100",
              bgPressedColor: "bg-neutral-300",
              iconColor: "text-neutral-850",
              iconPressedColor: "text-neutral-900",
            }
          : {
              bgColor: "bg-neutral-100",
              bgPressedColor: "bg-blue-200",
              iconColor: "text-blue-300",
              iconPressedColor: "text-blue-400",
            }
      }
      onPress={onPress}
      {...preset}
    />
  );
}
