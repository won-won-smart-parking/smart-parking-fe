import { Drawer } from "expo-router/drawer";
import { useState } from "react";
import { Pressable, View } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Avatar, Icon, Text } from "@shared/ui/atoms";

// screenOptions={{ headerShown: false }}

function SideMenu() {
  const [isLogin, _] = useState(true);

  return (
    <DrawerContentScrollView contentContainerStyle={{ flex: 1, justifyContent: "space-between" }}>
      <View>
        {/* 로그인(마이페이지 이동) / 비로그인(로그인 페이지 이동) */}
        <View className="border-b border-coolgray-200 py-4">
          <Pressable>
            {/* 로그인 + 비로그인 처리 */}
            {!isLogin ? (
              <View className="flex-row items-center gap-0.5">
                <Text typography="body-xl" className="text-neutral-1000">
                  로그인
                </Text>
                <Icon name="arrowRight" className="w-3 text-neutral-1000" />
              </View>
            ) : (
              <View className="flex-row gap-3">
                <Avatar size="sm" />
                <View className="flex-row items-center gap-0.5">
                  <Text typography="body-xl" className="text-neutral-1000">
                    로그인
                  </Text>
                  <Icon name="arrowRight" className="w-3 text-neutral-1000" />
                </View>
              </View>
            )}
          </Pressable>
        </View>

        {/* 네비게이션 */}
        {/* 차량 관리 + 내 주차권 + 즐겨찾기 */}
        {/* 서비스 정보(공지사항 + 환경 설정) */}
        <View></View>
      </View>
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
