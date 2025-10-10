import { Stack, useRouter } from "expo-router";
import { Pressable } from "react-native";
import { Icon, Text } from "@shared/ui/atoms";

export default function ServiceLayout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerLeft: () => {
          return (
            <Pressable onPress={() => router.back()}>
              <Icon name="arrowLeft" className="w-4 text-neutral-850" />
            </Pressable>
          );
        },
      }}
    >
      <Stack.Screen name="notice" options={{ headerTitle: () => <Text typography="heading-md">공지사항</Text> }} />
      <Stack.Screen name="policy" options={{ headerTitle: () => <Text typography="heading-md">약관 및 정책</Text> }} />
      <Stack.Screen name="setting" options={{ headerTitle: () => <Text typography="heading-md">환경 설정</Text> }} />
    </Stack>
  );
}
