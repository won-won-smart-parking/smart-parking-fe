import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

// import SectionTitle from "@features/auth/section-title";

export default function AuthLayout() {
  return (
    <SafeAreaView className="flex-1">
      {/* <SectionTitle /> */}
      <Slot />
    </SafeAreaView>
  );
}
