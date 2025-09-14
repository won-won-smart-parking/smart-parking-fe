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
    <Drawer screenOptions={{ swipeEnabled: false, drawerType: "front" }} drawerContent={() => <SideMenu />}>
      <Drawer.Screen name="index" />
    </Drawer>
  );
}
