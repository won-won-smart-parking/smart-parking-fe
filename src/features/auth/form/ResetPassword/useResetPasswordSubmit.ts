import { useRouter } from "expo-router";
import { SubmitHandler } from "react-hook-form";
import { requestResetPassword } from "@entities/auth/auth.api";
import { ResetPasswordFormValues } from "./index.type";

export default function useResetPasswordSubmit() {
  const router = useRouter();

  // 비밀번호 찾기 폼 제출 이벤트 핸들러
  const handleResetPasswordSubmit: SubmitHandler<ResetPasswordFormValues> = async (values) => {
    // 서버에 전송할 FormData를 구축한다.
    const formData = new FormData();
    for (const [key, value] of Object.entries(values)) {
      if (key === "newPasswordConfirm") continue;
      formData.append(key, value);
    }

    // 비밀번호 수정 API 요청
    const response = await requestResetPassword(formData);
    if (response.status) {
      router.navigate("/");
    }
  };

  return { handleResetPasswordSubmit };
}
