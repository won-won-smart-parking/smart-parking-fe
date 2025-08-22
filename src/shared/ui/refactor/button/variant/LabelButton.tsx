import clsx from "clsx";
import Text from "@/shared/ui/atoms/text";
import { BaseButton, BaseButtonProps, ButtonContainerPalette } from "../foundation";

interface Palette extends ButtonContainerPalette {
  textColor: string;
  textPressed: string;
}

interface Props extends BaseButtonProps {
  label: string;
  palette?: Partial<Palette>;
}

export default function LabelButton({
  fullWidth,
  border,
  roundedFull,
  disabled,
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
          className={clsx(
            pressed ? palette?.textColor || "text-neutral-900" : palette?.textPressed || "text-neutral-870",
          )}
        >
          {label}
        </Text>
      )}
    />
  );
}
