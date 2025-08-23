import clsx from "clsx";
import { TypographyKey } from "@/shared/tokens/typography";
import Text from "@shared/ui/atoms/text";
import { BaseButton, BaseButtonProps, ButtonContainerPalette } from "../foundation";

interface Palette extends ButtonContainerPalette {
  textColor: string;
  textPressedColor: string;
}

export interface Props extends BaseButtonProps {
  label: string;
  palette?: Partial<Palette>;
  typography?: TypographyKey;
}

export default function LabelButton({
  fullWidth,
  border,
  roundedFull,
  disabled,
  typography = "label-md",
  disablePressedEffect,
  overrideButtonContainerStyles,
  label,
  palette,
  onPress,
}: Props) {
  return (
    <BaseButton
      fullWidth={fullWidth}
      border={border}
      roundedFull={roundedFull}
      disabled={disabled}
      disablePressedEffect={disablePressedEffect}
      overrideButtonContainerStyles={overrideButtonContainerStyles}
      palette={palette}
      onPress={onPress}
      renderContent={(pressed) => (
        <Text
          typography={typography}
          className={clsx(
            !pressed ? palette?.textColor || "text-neutral-900" : palette?.textPressedColor || "text-neutral-870",
          )}
        >
          {label}
        </Text>
      )}
    />
  );
}
