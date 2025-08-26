import { Stack } from "expo-router";
import "@globals/styles/global.css";
import "@globals/styles/nativewind-interop";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
