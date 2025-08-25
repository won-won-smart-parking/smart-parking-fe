import clsx from "clsx";
import { Tabs, useRouter } from "expo-router";
import { Pressable } from "react-native";
import { Icon, Text } from "@shared/ui/atoms";

export default function TabLayout() {
  const router = useRouter();

  return (
    <Tabs screenOptions={{ headerTitleAlign: "center" }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }: { focused: boolean }) => (
            <Text typography="caption-xxl" className={clsx(!focused ? "text-neutral-900" : "text-neutral-1000")}>
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
        name="ticket"
        options={{
          headerTitle: () => <Text typography="heading-md">내 주차권</Text>,
          headerRight: () => (
            <Pressable onPress={() => router.navigate("/ticket/history")}>
              <Text typography="label-tight" className="mr-6 text-neutral-900">
                이용 내역
              </Text>
            </Pressable>
          ),
          tabBarLabel: ({ focused }: { focused: boolean }) => (
            <Text typography="caption-xxl" className={clsx(!focused ? "text-neutral-900" : "text-neutral-1000")}>
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
        name="bookmark"
        options={{
          headerTitle: () => <Text typography="heading-md">즐겨찾기</Text>,
          tabBarLabel: ({ focused }: { focused: boolean }) => (
            <Text typography="caption-xxl" className={clsx(!focused ? "text-neutral-900" : "text-neutral-1000")}>
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
          headerTitle: () => <Text typography="heading-md">프로필</Text>,
          tabBarLabel: ({ focused }: { focused: boolean }) => (
            <Text typography="caption-xxl" className={clsx(!focused ? "text-neutral-900" : "text-neutral-1000")}>
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
