import { View } from "react-native";
import SignInForm from "@features/auth/form/SignInForm";
import { Text } from "@shared/ui/atoms";

// smartparking://profile/edit
export default function SignInScreen() {
  return (
    <View className="flex-1 justify-center">
      <Text typography="display-default">로그인 페이지</Text>
      <SignInForm />
    </View>
  );
}
