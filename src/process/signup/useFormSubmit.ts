import { SignUpFormValues } from ".";
import { useRouter } from "expo-router";
import { useFormContext } from "react-hook-form";
import { fetchSignUp } from "@entities/auth/auth.api";

export default function useFormSubmit() {
  const { getValues } = useFormContext<SignUpFormValues>();
  const router = useRouter();

  // Form Data 제출 이벤트
  const handleSubmit = async () => {
    const userInfo = getValues(); // 사용자의 정보를 가지고 온다.

    // 서버에 전송할 FormData 객체를 구성한다.
    const formDate = new FormData();
    for (const key in userInfo) {
      const typedKey = key as keyof SignUpFormValues;

      Object.entries(userInfo[typedKey]).forEach(([key, value]) => {
        // Profile의 value는 객체이기 때문에 별도로 처리해준다.
        if (key === "profile" && userInfo.validation.profile) {
          formDate.append(key, {
            name: userInfo.validation.profile.imageName,
            type: userInfo.validation.profile.imageType,
            uri: userInfo.validation.profile.imageUrl,
          });
          return;
        }

        // Profile의 Date는 객체이기 때문에 별도로 처리해준다.
        else if (key === "birthday" && userInfo.validation.birthday instanceof Date) {
          formDate.append(
            key,
            `${value.getFullYear()}.${(value.getMonth() + 1).toString().padStart(2, "0")}.${value.getDate().toString().padStart(2, "0")}`,
          );
          return;
        }

        formDate.append(key, value); // Profile을 제외한 일반 키
      });
    }

    const response = await fetchSignUp(formDate);
    if (response.status) {
      router.navigate("/auth/sign-in");
    }
  };

  return { handleSubmit };
}
