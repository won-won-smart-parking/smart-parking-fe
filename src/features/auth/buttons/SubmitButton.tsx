import { Button } from "@shared/ui/atoms";

interface Props {
  label: string;
  onPress: () => void;
}

// 로그인 + 회원가입 폼 제출(Submit) 버튼
export default function SubmitButton({ label, onPress }: Props) {
  return (
    <Button
      variant="label"
      label={label}
      onPress={onPress}
      palette={{
        bgColor: "bg-blue-300",
        bgPressedColor: "bg-blue-400",
        textColor: "text-neutral-100",
        textPressedColor: "text-neutral-300",
      }}
      fullWidth
      disablePressedEffect
    />
  );
}
