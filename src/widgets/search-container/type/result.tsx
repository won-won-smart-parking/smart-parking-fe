import { View } from "react-native";
import { elevation } from "@shared/tokens";
import SearchField from "@shared/ui/molecules/search-field";

export default function ResultSearchContainer() {
  return (
    <View className="bg-neutral-100 px-3 py-2" style={elevation.floating}>
      <SearchField
        leftIcon={{ iconName: "menu", onPress: () => {} }}
        rightIcon={{ iconName: "mic", onPress: () => {} }}
        input={{
          placeholder: "주차장을 입력해주세요.",
          value: "",
          onChangeText: () => {},
          onPress: () => {},
        }}
      />
    </View>
  );
}
