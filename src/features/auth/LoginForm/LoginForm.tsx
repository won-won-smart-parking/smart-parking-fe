import { Link } from "expo-router";
import { View } from "react-native";
import { Text } from "@shared/ui/atoms";
import useLoginForm from "./useLoginForm";
import FormInputField from "../foundation/FormInputField";

export default function LoginForm() {
  const { state, ...handler } = useLoginForm(); // 로그인 폼에서 사용될 커스텀 훅(Custom Hook)

  // useEffect(() => {
  //   console.log(state);
  //   console.log(handler);
  // }, []);

  return (
    <View className="gap-5">
      <View className="gap-4">
        <FormInputField name="id" label="이메일" placeholder="이메일을 입력해주세요..." state={state} {...handler} />
        <FormInputField name="password" label="비밀번호" placeholder="비밀번호를 입력해주세요..." state={state} {...handler} />
      </View>

      <Link href="/auth/reset-password" className="text-right">
        <Text typography="caption-sm" className="text-blue-400">
          비밀번호 찾기
        </Text>
      </Link>
    </View>
  );
}
