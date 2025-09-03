import { Stack } from "expo-router";
import TanStackProvider from "@global/providers/TanStackProvider";
import "@global/styles/global.css";
import "@global/styles/nativewind-interop";

export default function RootLayout() {
  return (
    <TanStackProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </TanStackProvider>
  );
}
