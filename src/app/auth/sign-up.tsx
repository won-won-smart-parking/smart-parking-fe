import { View } from "react-native";
import SignUpForm from "@/process/signup";
import { Text } from "@shared/ui/atoms";

// smartparking://profile/edit
export default function SignUpScreen() {
  return (
    <View className="flex-1 justify-center">
      <Text typography="display-default">회원가입 페이지</Text>
      <SignUpForm />
    </View>
  );
}
