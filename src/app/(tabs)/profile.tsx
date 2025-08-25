import { useRouter } from "expo-router";
import { Button, View } from "react-native";

// smartparking://profile
export default function ProfileScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center">
      <Button title="프로필 수정 페이지 이동" onPress={() => router.navigate("/profile/edit")} />
      <Button title="회원탈퇴 페이지 이동" onPress={() => router.navigate("/profile/delete")} />
      <Button title="설정 페이지 이동" onPress={() => router.navigate("/profile/setting")} />
      <Button title="차량 관리 페이지 이동" onPress={() => router.navigate("/profile/car/")} />
    </View>
  );
}
