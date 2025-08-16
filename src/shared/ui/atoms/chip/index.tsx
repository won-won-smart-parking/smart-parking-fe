import { PressableProps } from "react-native";
import Button from "@shared/ui/atoms/button";
import { ButtonVariant } from "@shared/ui/atoms/button/foundation";
import { chipPalettePreset } from "./palette-preset";

interface Props extends PressableProps {
  content: ButtonVariant;
  border?: boolean;
  selected?: boolean;
}

export default function Chip({ content, border = true, selected = false }: Props) {
  const palettePreset = chipPalettePreset(content.variant, border, selected);

  return (
    <Button
      content={content}
      fullWidth={false}
      roundFull={true}
      border={border}
      iconSize="w-5"
      containerClassName="pl-3 pr-3"
      typography="description-md"
      paletteOverride={palettePreset}
      disablePressedEffect
    />
  );
}
