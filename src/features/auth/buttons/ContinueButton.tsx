import { Step } from "@/process/signup/index.type";
import { Button } from "@shared/ui/atoms";
import { useSignUpStepValidation } from "../hooks/useSignUpStepValidation";

interface Props {
  step: Step;
  onPress: () => void;
}

// 계속하기 버튼 로직 단계 (각 단계 유효성 검사 통과 시 단계 증가)
// - Step 01. RHF.defaultValues.account 검사 수행
// - Step 02. RHF.defaultValues.verification 검사 수행
export default function ContinueButton({ step, onPress }: Props) {
  const isValid = useSignUpStepValidation(step);

  return (
    <Button
      variant="label"
      label="계속하기"
      onPress={onPress}
      palette={
        isValid
          ? {
              bgColor: "bg-blue-300",
              bgPressedColor: "bg-blue-400",
              textColor: "text-neutral-100",
              textPressedColor: "text-neutral-300",
            }
          : {
              bgColor: "bg-neutral-500",
              bgPressedColor: "bg-neutral-600",
              textColor: "text-neutral-870",
              textPressedColor: "text-neutral-800",
            }
      }
      disabled={!isValid}
    />
  );
}
