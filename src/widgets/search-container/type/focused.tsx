import { useState } from "react";
import { View } from "react-native";
import SearchField from "@shared/ui/molecules/search-field";

export default function FocusedSearchContainer() {
  // 입력 상태값
  const [value, setValue] = useState("");

  return (
    <View className="border-b border-neutral-400 px-3 py-2">
      <SearchField
        leftIcon={{
          iconName: "arrowLeft",
          onPress: () => {
            // 뒤로가기 시 입력값 초기화
            setValue("");
          },
        }}
        input={{
          placeholder: "",
          value,
          onChangeText: setValue,
          onPress: () => {},
        }}
        rightIcon={{ iconName: "mic", onPress: () => {} }}
      />
    </View>
  );
}
