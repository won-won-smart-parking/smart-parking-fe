import { PressableProps } from "react-native";
import Button from "@shared/ui/atoms/button";
import { IconName } from "@shared/ui/atoms/icon/variants";
import { palettePreset, propsPreset } from "../foundation";

interface Props extends PressableProps {
  label: string;
  border?: boolean;
  selected?: boolean;
  iconName: IconName;
}

// Both Chip 컴포넌트
export default function BothChip({ label, border = true, selected = false, iconName = "example", onPress }: Props) {
  const paleteOverride = palettePreset(border, selected);

  return (
    <Button
      variant="both"
      typography="description-md"
      iconSize="w-5"
      label={label}
      border={border}
      iconName={iconName}
      palette={paleteOverride}
      onPress={onPress}
      {...propsPreset}
    />
  );
}
