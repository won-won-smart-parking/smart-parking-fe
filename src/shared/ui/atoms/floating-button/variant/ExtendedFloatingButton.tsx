import { type PressableProps } from "react-native";
import { Button } from "@shared/ui/atoms";
import type { IconName } from "@shared/ui/atoms/icon/variants";
import { preset } from "../foundation/preset";

export interface Props extends PressableProps {
  iconName: IconName;
  label: string;
}

export default function ExtendedFloatingButton({ iconName, label, onPress }: Props) {
  return (
    <Button
      variant="both"
      label={label}
      iconName={iconName}
      typography="body-lg"
      palette={{
        bgColor: "bg-neutral-100",
        bgPressedColor: "bg-neutral-300",
        textColor: "text-blue-300",
        textPressedColor: "text-blue-400",
        iconColor: "text-blue-300",
        iconPressedColor: "text-blue-400",
      }}
      onPress={onPress}
      {...preset}
    />
  );
}
