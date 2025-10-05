import { Button } from "@shared/ui/atoms";
import useFormSubmit from "../useFormSubmit";

// 회원가입 제출(Submit) 버튼
export default function SubmitButton() {
  const { handleSubmit } = useFormSubmit();

  return (
    <Button
      variant="label"
      label="로그인 화면으로 이동"
      onPress={handleSubmit}
      palette={{
        bgColor: "bg-blue-300",
        bgPressedColor: "bg-blue-400",
        textColor: "text-neutral-100",
        textPressedColor: "text-neutral-300",
      }}
    />
  );
}
