import { Button } from "@shared/ui/atoms";
import { IconButtonProps } from "@shared/ui/atoms/button/variant";

export default function SearchFieldButton(props: IconButtonProps) {
  return (
    <Button
      variant="icon"
      roundedFull
      disablePressedEffect
      overrideButtonContainerStyles="aspect-square"
      palette={{
        bgColor: "bg-transparent",
        bgPressedColor: "bg-transparent",
        iconColor: "text-neutral-900",
      }}
      {...props}
    />
  );
}
