import { View } from "react-native";
import SideMenuIcon from "@widgets/home/side-menu/foundation/SideMenuIcon";
import SideMenuText from "@widgets/home/side-menu/foundation/SideMenuText";

// 비로그인 사용자 프로필
export default function ProfileGuest() {
  return (
    <View className="flex-row items-center gap-0.5">
      <SideMenuText typography="body-xl" label="로그인" />
      <SideMenuIcon name="arrowRight" className="w-3" />
    </View>
  );
}
