import { View } from "react-native";
import { elevation } from "@shared/tokens";
import SearchField from "@shared/ui/molecules/search-field";

export default function SearchContainer() {
  return (
    <View className="rounded-xl bg-neutral-100 px-3 py-2" style={elevation.raised}>
      {/* 상단 검색 필드 */}
      <SearchField
        leftIcon={{ iconName: "menu", onPress: () => {} }}
        input={{ placeholder: "주차장을 입력해주세요", value: "", onChangeText: () => {}, onPress: () => {} }}
        rightIcon={{ iconName: "mic", onPress: () => {} }}
      />
    </View>
  );
}
