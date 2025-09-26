import Drawer from "expo-router/drawer";
import TanStackProvider from "@global/providers/TanStackProvider";
import "@global/styles/global.css";
import "@global/styles/nativewind-interop";
import SideMenu from "@widgets/home/side-menu";

export default function RootLayout() {
  return (
    <TanStackProvider>
      <Drawer
        screenOptions={{
          swipeEnabled: false,
          headerShown: false,
          drawerType: "front",
          drawerStyle: { width: "70%", borderTopRightRadius: 0, borderBottomRightRadius: 0 },
        }}
        drawerContent={() => <SideMenu />}
      >
        <Drawer.Screen name="(tabs)" />
      </Drawer>
    </TanStackProvider>
  );
}
