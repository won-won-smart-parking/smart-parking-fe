import { Stack } from "expo-router";
import Text from "@shared/ui/atoms/text";

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="sign-in"
        options={{
          headerTitle: () => <Text variant="heading-md">로그인을 해주세요.</Text>,
        }}
      />
      {/* <Stack.Screen
        name="sign-up"
        options={{
          headerTitle: () => <Text variant="heading-md">회원탈퇴</Text>,
        }}
      /> */}
      <Stack.Screen
        name="reset-password"
        options={{
          headerTitle: () => <Text variant="heading-md">인증 후 비밀번호를 변경해주세요.</Text>,
        }}
      />
    </Stack>
  );
}
