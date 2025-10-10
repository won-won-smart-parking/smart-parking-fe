import React from "react";
import { Pressable, View } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Text } from "@shared/ui/atoms";
import { sections } from "./model/menu";
import ProfileGuest from "./part/ProfileGuest";
import ProfileLoggedIn from "./part/ProfileLoggedIn";
import SideMenuItem from "./part/SideMenuItem";
import { useSideMenu } from "./useSideMenu";

// DrawerContent(Side Menu) 커스텀 컴포넌트
export default function SideMenu() {
  const {
    store: { isLogin, userName, userProfileUrl },
    handleNavigate,
  } = useSideMenu();

  return (
    <DrawerContentScrollView contentContainerStyle={{ flex: 1, justifyContent: "space-between" }}>
      <View>
        {/* 로그인(마이페이지 이동) / 비로그인(로그인 페이지 이동) */}
        <View className="border-b border-coolgray-200 py-4">
          <Pressable>
            {!isLogin ? <ProfileGuest /> : <ProfileLoggedIn userName={userName} userProfileUrl={userProfileUrl} />}
          </Pressable>
        </View>

        {/* 네비게이션 */}
        <View className="mt-6 gap-5">
          {/* 차량 관리 + 내 주차권 + 즐겨찾기 */}
          <View key={sections[0].key}>
            {sections[0].items.map((item) => (
              <SideMenuItem
                key={item.key}
                text={item.text}
                icon={item.icon}
                onPress={() => handleNavigate(item.key, item.to)}
              />
            ))}
          </View>

          {/* 서비스 정보(공지사항 + 환경 설정) */}
          <View className="gap-1" key={sections[1].key}>
            <Text typography="caption-sm" className="text-neutral-850">
              서비스 정보
            </Text>

            <View>
              {sections[1].items.map((item) => (
                <SideMenuItem
                  key={item.key}
                  text={item.text}
                  icon={item.icon}
                  onPress={() => handleNavigate(item.key, item.to)}
                />
              ))}
            </View>
          </View>
        </View>
      </View>

      {/* 로그아웃 레이아웃 */}
      {isLogin && (
        <View className="flex-row">
          <SideMenuItem
            icon={{ name: "logout", className: "text-red-300" }}
            text={{ label: "로그아웃", className: "text-red-300" }}
            onPress={() => {
              // console.log("로그아웃")
            }}
          />
        </View>
      )}
    </DrawerContentScrollView>
  );
}
