import { Button } from "@shared/ui/atoms";

interface Props {
  label: string;
  disabled: boolean;
  onPress: () => void;
}

export default function FormSubmitButton({ label, disabled, onPress, ...rest }: Props) {
  return (
    <Button
      variant="label"
      label={label}
      disabled={disabled}
      palette={
        disabled
          ? {
              bgColor: "bg-neutral-500",
              bgPressedColor: "bg-neutral-500",
              textColor: "text-neutral-870",
              textPressedColor: "text-neutral-870",
            }
          : {
              bgColor: "bg-blue-300",
              bgPressedColor: "bg-blue-300",
              textColor: "text-neutral-100",
              textPressedColor: "text-neutral-100",
            }
      }
      disablePressedEffect
      fullWidth
      onPress={onPress}
      {...rest}
    />
  );
}
