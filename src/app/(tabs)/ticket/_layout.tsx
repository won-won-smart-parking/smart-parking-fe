import clsx from "clsx";
import { withLayoutContext } from "expo-router";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text } from "@shared/ui/atoms";

const { Navigator } = createMaterialTopTabNavigator();

export const TopTabs = withLayoutContext(Navigator);

export default function TicketTabsLayout() {
  return (
    <TopTabs screenOptions={{ tabBarIndicatorStyle: { backgroundColor: "#5BABF8" } }}>
      <TopTabs.Screen
        name="daily"
        options={{
          tabBarLabel: ({ focused }: { focused: boolean }) => (
            <Text typography="label-sm" className={clsx(!focused ? "text-neutral-850" : "text-blue-300")}>
              일일권
            </Text>
          ),
        }}
      />
      <TopTabs.Screen
        name="regular"
        options={{
          tabBarLabel: ({ focused }: { focused: boolean }) => (
            <Text typography="label-sm" className={clsx(!focused ? "text-neutral-850" : "text-blue-300")}>
              정기권
            </Text>
          ),
        }}
      />
    </TopTabs>
  );
}
