import { Stack, useRouter } from "expo-router";
import { Pressable } from "react-native";
import Icon from "@/shared/ui/atoms/icon";

export default function TicketLayout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { height: 128 },
        headerBackTitleVisible: false,
        headerLeft: () => (
          <Pressable onPress={() => router.back()}>
            <Icon name="arrowLeft" className="w-4 text-neutral-850" />
          </Pressable>
        ),
      }}
    >
      <Stack.Screen name="history" />
      <Stack.Screen name="[passId]" />
    </Stack>
  );
}
