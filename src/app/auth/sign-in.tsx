import { useRouter } from "expo-router";
import { Button, View } from "react-native";
import { Text } from "@shared/ui/atoms";

// smartparking://profile/edit
export default function SignInScreen() {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center">
      <Text typography="display-default">로그인 페이지</Text>

      <Button title="회원가입 페이지 이동" onPress={() => router.navigate("/auth/sign-up")} />
      <Button title="비밀번호 수정 페이지 이동" onPress={() => router.navigate("/auth/reset-password")} />
    </View>
  );
}
