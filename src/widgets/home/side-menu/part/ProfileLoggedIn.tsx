import { View } from "react-native";
import { Avatar } from "@shared/ui/atoms";
import SideMenuIcon from "@widgets/home/side-menu/foundation/SideMenuIcon";
import SideMenuText from "@widgets/home/side-menu/foundation/SideMenuText";

// 로그인 사용자 유저 프로필
export default function ProfileLoggedIn() {
  return (
    <View className="flex-row gap-3">
      <Avatar size="sm" />
      <View className="flex-row items-center gap-0.5">
        <SideMenuText typography="body-xl" label="로그인" />
        <SideMenuIcon name="arrowRight" className="w-3" />
      </View>
    </View>
  );
}
