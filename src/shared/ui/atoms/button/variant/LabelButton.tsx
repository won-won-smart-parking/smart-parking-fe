import clsx from "clsx";
import type { TypographyKey } from "@shared/tokens/typography";
import { Text } from "@shared/ui/atoms";
import { BaseButton, type BaseButtonProps, type ButtonContainerPalette } from "../foundation";

interface Palette extends ButtonContainerPalette {
  textColor: string;
  textPressedColor: string;
}

export interface Props extends BaseButtonProps {
  label: string;
  palette?: Partial<Palette>;
  typography?: TypographyKey;
}

export default function LabelButton({ label, palette, typography = "label-md", ...rest }: Props) {
  return (
    <BaseButton
      palette={palette}
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
      {...rest}
    />
  );
}
