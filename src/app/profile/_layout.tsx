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
          <Pressable onPress={() => router.dismissAll()}>
            <Icon name="arrowLeft" className="w-4 text-neutral-850" />
          </Pressable>
        ),
      }}
    >
      <Stack.Screen
        name="edit"
        options={{
          headerTitle: () => <Text variant="heading-md">프로필 수정</Text>,
        }}
      />
      <Stack.Screen
        name="delete"
        options={{
          headerTitle: () => <Text variant="heading-md">회원탈퇴</Text>,
        }}
      />
      <Stack.Screen
        name="setting"
        options={{
          headerTitle: () => <Text variant="heading-md">설정</Text>,
        }}
      />
    </Stack>
  );
}
