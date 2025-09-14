import { Drawer } from "expo-router/drawer";
import SideMenu from "@widgets/home/side-menu";

export default function HomeDrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        swipeEnabled: false,
        headerShown: false,
        drawerType: "front",
        drawerStyle: { width: "70%", borderTopRightRadius: 0, borderBottomRightRadius: 0 },
      }}
      drawerContent={() => <SideMenu isLogin={true} />}
    >
      <Drawer.Screen name="index" />
    </Drawer>
  );
}
