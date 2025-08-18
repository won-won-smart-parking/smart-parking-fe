import { Stack, useRouter } from "expo-router";
import { Pressable } from "react-native";
import Icon from "@/shared/ui/atoms/icon";
import Text from "@/shared/ui/atoms/text";

export default function TicketLayout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { height: 128 },
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
          headerTitle: () => <Text variant="heading-md">이용내역</Text>,
        }}
      />
      <Stack.Screen
        name="[passId]"
        options={{
          headerTitle: () => <Text variant="heading-md">이용권 상세</Text>,
        }}
      />
    </Stack>
  );
}
