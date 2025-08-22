import clsx from "clsx";
import { IconName } from "@/shared/ui/atoms/icon/variants";
import Icon from "@shared/ui/atoms/icon";
import { BaseButton, BaseButtonProps, ButtonContainerPalette } from "../foundation";

interface Palette extends ButtonContainerPalette {
  iconColor: string;
  iconPressed: string;
}

export interface Props extends BaseButtonProps {
  iconName: IconName;
  iconSize: string;
  palette?: Partial<Palette>;
}

export default function IconButton({
  iconName,
  fullWidth,
  border,
  roundedFull,
  disabled,
  disablePressedEffect,
  overrideButtonContainerStyles,
  palette,
  iconSize = "w-6",
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
        <Icon
          name={iconName}
          className={clsx(
            !pressed ? palette?.iconColor || "text-neutral-900" : palette?.iconPressed || "text-neutral-870",
            iconSize,
          )}
        />
      )}
    />
  );
}
