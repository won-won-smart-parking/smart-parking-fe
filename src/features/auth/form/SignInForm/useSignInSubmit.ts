import { useRouter } from "expo-router";
import { SubmitHandler, UseFormSetError } from "react-hook-form";
import { requestSignIn } from "@entities/auth/auth.api";
import { useUserStore } from "@entities/user/user.store";
import { SignInFormValues } from "./index.type";

export default function useSignInSubmit(setError: UseFormSetError<SignInFormValues>) {
  const router = useRouter();
  const login = useUserStore((state) => state.login);

  // 로그인 입력 필드 유효성 검사 통과 A시 작동하는 Submit 핸들러
  const handleSignInSuccessSubmit: SubmitHandler<SignInFormValues> = async (loginValues) => {
    // 서버에 전달할 FormData를 구축한다.
    const formData = new FormData();
    for (const [key, value] of Object.entries(loginValues)) {
      formData.append(key, value);
    }

    // 로그인 요청을 보낸 후 성공 응답을 받을 경우 운영체제 비밀 저장소 + 전역 상태 + 파일 시스템에 사용자 정보를 저장한다.
    const response = await requestSignIn(formData);
    if (response.status && response.data) {
      login(response.data);
      router.navigate("/(tabs)");
      return;
    }

    // 로그인 실패 시 Form 인풋 메시지 + 포커스 구성
    if (response.code === "EMAIL_NOT_FOUND") {
      setError("email", { message: response.message });
      setError("password", {});
    } else if (response.code === "INVALID_PASSWORD") {
      setError("password", { message: response.message });
    } else {
      return setError("email", { message: "" });
    }
  };

  return { handleSignInSuccessSubmit };
}
