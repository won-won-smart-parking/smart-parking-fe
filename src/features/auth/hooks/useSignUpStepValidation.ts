import { FieldErrors, useFormContext } from "react-hook-form";
import type { SignUpFormValues, Step } from "@/process/signup/index.type";

// 폼의 선택적 속성을 제외하고 유효성 검증 후 단계 활성화
function isStepValid<K extends keyof SignUpFormValues>(values: SignUpFormValues[K], errors: FieldErrors<SignUpFormValues>, key: K) {
  const validValues = { ...values };

  if (key === "account" && "agreePushNotice" in validValues) {
    delete validValues["agreePushNotice"];
  }

  if (key === "validation" && "profile" in validValues) {
    delete validValues["profile"];
  }

  return Object.values(validValues ?? {}).every(Boolean) && !!!errors[key];
}

// 회원가입 각 단계 유효성 검증 성공 여부 처리 사용자 정의 훅
// - 3단계는 정보 확인 단계이기 때문에 Submit 제출 제외한 검증 처리 없음
export function useSignUpStepValidation(step: Omit<Step, 3>) {
  const {
    watch,
    formState: { errors },
  } = useFormContext<SignUpFormValues>();

  // ( 이름, 이메일, 비밀번호, 약관 동의 ) 회원가입 단계 유효성 검사
  if (step === 1) {
    return isStepValid(watch("account"), errors, "account");
  }

  // (전화번호, 생년월일) 개인 정보 단계 유효성 검사
  return isStepValid(watch("validation"), errors, "validation");
}
