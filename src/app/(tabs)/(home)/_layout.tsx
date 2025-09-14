import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

// screenOptions={{ headerShown: false }}

function SideMenu() {
  return (
    <DrawerContentScrollView>
      <DrawerItem label="Navigate..." />
      <DrawerItem label="Navigate..." />
      <DrawerItem label="Navigate..." />
      <DrawerItem label="Navigate..." />
    </DrawerContentScrollView>
  );
}

export default function HomeDrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        swipeEnabled: false,
        drawerType: "front",
        drawerStyle: { width: "70%", borderTopRightRadius: 0, borderBottomRightRadius: 0 },
      }}
      drawerContent={() => <SideMenu />}
    >
      <Drawer.Screen name="index" />
    </Drawer>
  );
}
