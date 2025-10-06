import { Link } from "expo-router";
import { useForm } from "react-hook-form";
import { Platform, View } from "react-native";
import { SocialButton, Text } from "@shared/ui/atoms";
import ButtonGroup from "@shared/ui/molecules/button-group";
import { EmailInputField, PasswordInputField } from "../foundation";

export interface SignInFormValues {
  email: string;
  password: string;
}

export default function SignInForm() {
  const { control, resetField } = useForm<SignInFormValues>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <View className="flex-1 gap-15">
      {/* 일반 로그인 레이아웃 */}
      <View className="gap-4">
        <View className="gap-3">
          <EmailInputField control={{ name: "email", control }} resetField={resetField} />
          <PasswordInputField control={{ name: "password", control }} resetField={resetField} />
        </View>

        {/* smartparking://auth/reset-password 라우트로 이동 네비게이션 구조 */}
        <View className="items-end">
          <Link href="/auth/reset-password">
            <Text typography="caption-sm" className="text-blue-400">
              비밀번호 찾기
            </Text>
          </Link>
        </View>

        {/* 로그인 폼 제출(Submit) 이벤트 발생 버튼 */}
      </View>

      {/* 일반 로그인 <-> 소셜 로그인 구분선 */}
      <View className="flex-row items-center">
        <View className="flex-1 border border-neutral-700" />
        <Text typography="caption-xl" className="px-4 text-neutral-800">
          OR
        </Text>
        <View className="flex-1 border border-neutral-700" />
      </View>

      {/* 소셜 로그인 레이아웃 */}
      <View className="gap-12">
        <ButtonGroup>
          <SocialButton type="naver" />
          <SocialButton type="kakao" />
          <SocialButton type="facebook" />
          {Platform.OS === "ios" && <SocialButton type="apple" />}
        </ButtonGroup>

        <View className="flex-row justify-center">
          <Text typography="caption-sm" className="mr-2">
            회원이 아니신가요?
          </Text>
          <Link href="/auth/sign-up">
            <Text typography="caption-sm" className="text-blue-400">
              회원가입
            </Text>
          </Link>
        </View>
      </View>
    </View>
  );
}
