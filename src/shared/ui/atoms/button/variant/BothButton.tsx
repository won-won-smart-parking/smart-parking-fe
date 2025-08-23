import clsx from "clsx";
import { TypographyKey } from "@/shared/tokens/typography";
import { IconName } from "@/shared/ui/atoms/icon/variants";
import Text from "@/shared/ui/atoms/text";
import Icon from "@shared/ui/atoms/icon";
import { BaseButton, BaseButtonProps, ButtonContainerPalette } from "../foundation";

interface Palette extends ButtonContainerPalette {
  textColor: string;
  textPressedColor: string;
  iconColor: string;
  iconPressedColor: string;
}

export interface Props extends BaseButtonProps {
  label: string;
  iconName: IconName;
  iconSize?: string;
  palette?: Partial<Palette>;
  typography?: TypographyKey;
}

export default function BothButton({
  iconName,
  iconSize = "w-6",
  fullWidth,
  border,
  roundedFull,
  disabled,
  typography = "label-md",
  disablePressedEffect,
  overrideButtonContainerStyles,
  palette,
  label,
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
        <>
          <Icon
            name={iconName}
            className={clsx(
              !pressed ? palette?.iconColor || "text-neutral-900" : palette?.iconPressedColor || "text-neutral-870",
              iconSize,
            )}
          />
          <Text
            typography={typography}
            className={clsx(
              !pressed ? palette?.textColor || "text-neutral-900" : palette?.textPressedColor || "text-neutral-870",
            )}
          >
            {label}
          </Text>
        </>
      )}
    />
  );
}
