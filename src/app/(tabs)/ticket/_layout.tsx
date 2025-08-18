import { withLayoutContext } from "expo-router";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const { Navigator } = createMaterialTopTabNavigator();

export const TopTabs = withLayoutContext(Navigator);

export default function TopTabsLayout() {
  return (
    <TopTabs screenOptions={{ tabBarIndicatorStyle: { backgroundColor: "blue" } }}>
      <TopTabs.Screen name="daily" options={{ title: "일일권" }} />
      <TopTabs.Screen name="regular" options={{ title: "정기권" }} />
    </TopTabs>
  );
}
