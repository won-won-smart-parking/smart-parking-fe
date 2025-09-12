import { View } from "react-native";
import SearchField from "@shared/ui/molecules/search-field";

export default function SearchContainer() {
  return (
    <View className="w-full flex-1">
      {/* 상단 검색 필드 */}
      <SearchField
        leftIcon={{ iconName: "menu", onPress: () => {} }}
        input={{ placeholder: "주차장을 입력해주세요", value: "", onChangeText: () => {}, onPress: () => {} }}
        rightIcon={{ iconName: "mic", onPress: () => {} }}
      />
    </View>
  );
}
