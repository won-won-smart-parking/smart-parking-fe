import clsx from "clsx";
import { Tabs } from "expo-router";
import Icon from "@/shared/ui/atoms/icon";
import Text from "@/shared/ui/atoms/text";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: ({ focused }: { focused: boolean }) => (
            <Text variant="caption-xxl" className={clsx(!focused ? "text-neutral-900" : "text-neutral-1000")}>
              홈
            </Text>
          ),
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <Icon
              name={!focused ? "gridOutline" : "gridFill"}
              className={clsx("w-6", !focused ? "text-neutral-900" : "text-neutral-1000")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="parking-pass"
        options={{
          tabBarLabel: ({ focused }: { focused: boolean }) => (
            <Text variant="caption-xxl" className={clsx(!focused ? "text-neutral-900" : "text-neutral-1000")}>
              내 주차권
            </Text>
          ),
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <Icon
              name={!focused ? "ticketOutline" : "ticketFill"}
              className={clsx("w-6", !focused ? "text-neutral-900" : "text-neutral-1000")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarLabel: ({ focused }: { focused: boolean }) => (
            <Text variant="caption-xxl" className={clsx(!focused ? "text-neutral-900" : "text-neutral-1000")}>
              즐겨찾기
            </Text>
          ),
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <Icon
              name={!focused ? "bookmarkOutline" : "bookmarkFill"}
              className={clsx("w-6", !focused ? "text-neutral-900" : "text-neutral-1000")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: ({ focused }: { focused: boolean }) => (
            <Text variant="caption-xxl" className={clsx(!focused ? "text-neutral-900" : "text-neutral-1000")}>
              MY
            </Text>
          ),
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <Icon
              name={!focused ? "userRoundedOutline" : "userRoundedFill"}
              className={clsx("w-6", !focused ? "text-neutral-900" : "text-neutral-1000")}
            />
          ),
        }}
      />
    </Tabs>
  );
}
