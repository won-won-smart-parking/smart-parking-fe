import clsx from "clsx";
import { Icon } from "@shared/ui/atoms";
import type { IconName } from "@shared/ui/atoms/icon/variants";
import { BaseButton, BaseButtonProps, ButtonContainerPalette } from "../foundation";

interface Palette extends ButtonContainerPalette {
  iconColor: string;
  iconPressedColor: string;
}

export interface Props extends BaseButtonProps {
  iconName: IconName;
  iconSize?: string;
  palette?: Partial<Palette>;
}

export default function IconButton({ iconName, palette, iconSize = "w-6", ...rest }: Props) {
  return (
    <BaseButton
      renderContent={(pressed) => (
        <Icon
          name={iconName}
          className={clsx(
            !pressed ? palette?.iconColor || "text-neutral-900" : palette?.iconPressedColor || "text-neutral-870",
            iconSize,
          )}
        />
      )}
      {...rest}
    />
  );
}
