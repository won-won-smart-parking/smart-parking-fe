import { View } from "react-native";
import ResetPassword from "@features/auth/form/ResetPassword";
import { Text } from "@shared/ui/atoms";

// smartparking://profile/edit
export default function ResetPasswordScreen() {
  return (
    <View className="flex-1">
      <Text typography="display-default">비밀번호 수정 페이지</Text>
      <ResetPassword />
    </View>
  );
}
