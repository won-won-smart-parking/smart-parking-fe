import clsx from "clsx";
import type { TypographyKey } from "@shared/tokens/typography";
import { Icon, Text } from "@shared/ui/atoms";
import type { IconName } from "@shared/ui/atoms/icon/variants";
import { BaseButton, type BaseButtonProps, type ButtonContainerPalette } from "../foundation";

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
  label,
  iconName,
  iconSize = "w-6",
  typography = "label-md",
  palette,
  ...rest
}: Props) {
  return (
    <BaseButton
      palette={palette}
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
      {...rest}
    />
  );
}
