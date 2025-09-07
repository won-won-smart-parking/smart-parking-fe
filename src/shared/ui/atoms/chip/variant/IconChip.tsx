import { PressableProps } from "react-native";
import { elevation } from "@shared/tokens";
import Button from "@shared/ui/atoms/button";
import type { IconName } from "@shared/ui/atoms/icon/variant";
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
      defaultEffect={selected ? elevation.active : undefined}
      {...propsPreset}
    />
  );
}
