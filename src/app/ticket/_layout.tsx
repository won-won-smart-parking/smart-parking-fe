import { Stack, useRouter } from "expo-router";
import { Pressable } from "react-native";
import { Icon, Text } from "@shared/ui/atoms";

export default function TicketLayout() {
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
        name="history"
        options={{
          headerTitle: () => <Text typography="heading-md">이용내역</Text>,
        }}
      />
      <Stack.Screen
        name="[passId]"
        options={{
          headerTitle: () => <Text typography="heading-md">이용권 상세</Text>,
        }}
      />
    </Stack>
  );
}
