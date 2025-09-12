import { useState } from "react";
import { View } from "react-native";
import SearchField from "@shared/ui/molecules/search-field";

export default function FocusedSearchContainer() {
  const [value, setValue] = useState("");

  return (
    <View className="border-b border-neutral-400 px-3 py-2">
      <SearchField
        leftIcon={{
          iconName: "arrowLeft",
          onPress: () => {
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
