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
        <View className="mt-6 gap-5">
          {/* 차량 관리 + 내 주차권 + 즐겨찾기 */}
          <View>
            <Pressable className="flex-row items-center py-3" onPress={() => console.log("차량 관리")}>
              <View className="flex-row items-center gap-3">
                <Icon name="carDoor" />
                <Text typography="body-lg">차량 관리</Text>
              </View>
            </Pressable>

            <Pressable className="flex-row items-center py-3" onPress={() => console.log("내 주차권")}>
              <View className="flex-row items-center gap-3">
                <Icon name="ticketOutline" />
                <Text typography="body-lg">내 주차권</Text>
              </View>
            </Pressable>

            <Pressable className="flex-row items-center py-3" onPress={() => console.log("즐겨찾기")}>
              <View className="flex-row items-center gap-3">
                <Icon name="bookmarkOutline" />
                <Text typography="body-lg">즐겨찾기</Text>
              </View>
            </Pressable>
          </View>

          {/* 서비스 정보(공지사항 + 환경 설정) */}
          <View className="gap-1">
            <Text typography="caption-sm" className="text-neutral-850">
              서비스 정보
            </Text>

            <View>
              <Pressable className="flex-row items-center py-3" onPress={() => console.log("공지 사항")}>
                <View className="flex-row items-center gap-3">
                  <Icon name="board" />
                  <Text typography="body-lg">공지 사항</Text>
                </View>
              </Pressable>

              <Pressable className="flex-row items-center py-3" onPress={() => console.log("환경 설정")}>
                <View className="flex-row items-center gap-3">
                  <Icon name="setting" />
                  <Text typography="body-lg">환경 설정</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </View>

      {/* 로그아웃 레이아웃 */}
      <View className="flex-row">
        {isLogin && (
          <Pressable className="flex-row items-center py-3" onPress={() => console.log("로그아웃")}>
            <View className="flex-row items-center gap-3">
              <Icon name="logout" className="text-red-300" />
              <Text typography="body-lg" className="text-red-300">
                로그아웃
              </Text>
            </View>
          </Pressable>
        )}
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
