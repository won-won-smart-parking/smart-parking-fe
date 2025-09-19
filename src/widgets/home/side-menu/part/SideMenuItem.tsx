import { Pressable, View } from "react-native";
import SideMenuIcon from "../foundation/SideMenuIcon";
import SideMenuText from "../foundation/SideMenuText";
import { type SideMenuItem as SideMenuItemType } from "../model/menu";

interface Props extends Omit<SideMenuItemType, "key" | "to"> {
  onPress: () => void;
}

// 네비게이션 아이템 컴포넌트
export default function SideMenuItem({ icon, text, onPress }: Props) {
  return (
    <Pressable className="flex-row items-center py-3" onPress={onPress}>
      <View className="flex-row items-center gap-3">
        <SideMenuIcon name={icon.name} className={icon.className} />
        <SideMenuText typography="body-lg" label={text.label} className={text.className} />
      </View>
    </Pressable>
  );
}
