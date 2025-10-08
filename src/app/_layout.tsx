import Drawer from "expo-router/drawer";
import { useEffect } from "react";
import { useUserStore } from "@entities/user/user.store";
import TanStackProvider from "@global/providers/TanStackProvider";
import "@global/styles/global.css";
import "@global/styles/nativewind-interop";
import SideMenu from "@widgets/home/side-menu";

export default function RootLayout() {
  // 사용자 정보 초기화 사이드 이펙트 수행
  const userLoginInit = useUserStore((state) => state.init);
  useEffect(() => {
    userLoginInit();
  }, [userLoginInit]);

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
