import { useState } from "react";
import { UseFormSetError } from "react-hook-form";
import { requestConfirmEmail } from "@entities/auth/auth.api";
import { ResetPasswordFormValues } from "./index.type";

// 이메일 인증 상태 버튼
export default function useConfirmEmail(invalid: boolean, setError: UseFormSetError<ResetPasswordFormValues>) {
  const [isEmailConfirm, setIsEmailConfirm] = useState<boolean>(false);

  // 이메일 인증 버튼 이벤트 핸들러
  const handleEmailConfirmPress = async (email: string) => {
    if (invalid) return;

    // 입력 과정에서 이메일 유효성 검증을 모두 통과한 경우 -> API 요청을 통해 존재하는 이메일 여부 확인
    const response = await requestConfirmEmail(email);
    if (response.status) setIsEmailConfirm(true);
    else {
      setError("email", { message: response.message });
    }
  };

  return { isEmailConfirm, handleEmailConfirmPress };
}
