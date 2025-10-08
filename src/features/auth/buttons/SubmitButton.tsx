import { Button } from "@shared/ui/atoms";

interface Props {
  label: string;
  disabled?: boolean;
  onPress: () => void;
}

// 로그인 + 회원가입 폼 제출(Submit) 버튼
export default function SubmitButton({ label, disabled, onPress }: Props) {
  return (
    <Button
      variant="label"
      label={label}
      onPress={onPress}
      palette={
        disabled
          ? {
              bgColor: "bg-neutral-500",
              textColor: "text-neutral-870",
            }
          : {
              bgColor: "bg-blue-300",
              bgPressedColor: "bg-blue-400",
              textColor: "text-neutral-100",
              textPressedColor: "text-neutral-300",
            }
      }
      fullWidth
      disabled={disabled}
    />
  );
}
