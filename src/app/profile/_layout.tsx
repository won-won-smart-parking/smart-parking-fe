import { Stack, useRouter } from "expo-router";
import { Pressable } from "react-native";
import Icon from "@shared/ui/atoms/icon";
import Text from "@shared/ui/atoms/text";

export default function ProfileLayout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerBackTitleVisible: false,
        headerLeft: () => (
          <Pressable onPress={() => router.back()}>
            <Icon name="arrowLeft" className="w-4 text-neutral-850" />
          </Pressable>
        ),
      }}
    >
      <Stack.Screen
        name="edit"
        options={{
          headerTitle: () => <Text typography="heading-md">프로필 수정</Text>,
        }}
      />
      <Stack.Screen
        name="delete"
        options={{
          headerTitle: () => <Text typography="heading-md">회원탈퇴</Text>,
        }}
      />
      <Stack.Screen
        name="setting"
        options={{
          headerTitle: () => <Text typography="heading-md">설정</Text>,
        }}
      />
      <Stack.Screen
        name="car/index"
        options={{
          headerTitle: () => <Text typography="heading-md">차량 관리</Text>,
          headerRight: () => (
            <Pressable onPress={() => router.navigate("/profile/car/create")}>
              <Icon name="plus" className="w-6 text-neutral-850" />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="car/[carId]"
        options={{
          headerTitle: () => <Text typography="heading-md">차량 등록</Text>,
        }}
      />
      <Stack.Screen
        name="car/create"
        options={{
          headerTitle: () => <Text typography="heading-md">차량 수정</Text>,
        }}
      />
    </Stack>
  );
}
