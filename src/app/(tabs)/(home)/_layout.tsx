import { Drawer } from "expo-router/drawer";

export default function HomeDrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="index" />
    </Drawer>
  );
}
