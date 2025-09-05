import { Stack } from "expo-router";
import { useMockServiceWorker } from "@global/hooks/useMockServiceWorker";
import TanStackProvider from "@global/providers/TanStackProvider";
import "@global/styles/global.css";
import "@global/styles/nativewind-interop";

export default function RootLayout() {
  useMockServiceWorker(); // MSW 활성화 커스텀 훅 실행

  return (
    <TanStackProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </TanStackProvider>
  );
}
