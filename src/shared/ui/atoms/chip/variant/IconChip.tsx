import { PressableProps } from "react-native";
import { Button } from "@shared/ui/atoms";
import type { IconName } from "@shared/ui/atoms/icon/variants";
import { palettePreset, propsPreset } from "../foundation";

export interface Props extends PressableProps {
  iconName: IconName;
  border?: boolean;
  selected?: boolean;
}

// Icon Chip 컴포넌트
export default function IconChip({ border = true, selected = false, iconName = "example", onPress }: Props) {
  const paleteOverride = palettePreset(border, selected);

  return (
    <Button
      variant="icon"
      iconSize="w-5"
      roundedFull
      border={border}
      iconName={iconName}
      palette={paleteOverride}
      onPress={onPress}
      {...propsPreset}
    />
  );
}
