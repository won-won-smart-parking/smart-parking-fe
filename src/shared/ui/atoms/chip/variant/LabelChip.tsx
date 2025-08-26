import { PressableProps } from "react-native";
import Button from "@shared/ui/atoms/button";
import { palettePreset, propsPreset } from "../foundation";

export interface Props extends PressableProps {
  label: string;
  border?: boolean;
  selected?: boolean;
}

// Label Chip 컴포넌트
export default function LabelChip({ label, border = true, selected = false, onPress }: Props) {
  const paleteOverride = palettePreset(border, selected);

  return (
    <Button
      variant="label"
      typography="description-md"
      label={label}
      border={border}
      palette={paleteOverride}
      onPress={onPress}
      {...propsPreset}
    />
  );
}
