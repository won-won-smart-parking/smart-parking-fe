import { useState } from "react";

// 회원가입 단계 진행을 관리하는 커스텀 훅
export default function useFormStep() {
  const [step, setStep] = useState(1); // 현재 단계 상태

  // 다음 단계로 이동
  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  // 이전 단계로 이동
  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return { step, handleNextStep, handlePrevStep };
}
