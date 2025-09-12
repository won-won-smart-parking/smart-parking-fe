import { View } from "react-native";
import SearchField from "@shared/ui/molecules/search-field";

export default function FocusedSearchContainer() {
  return (
    <View className="border-b border-neutral-400 px-3 py-2">
      <SearchField
        leftIcon={{
          iconName: "arrowLeft",
          onPress: () => {},
        }}
        input={{
          placeholder: "",
          value: "",
          onChangeText: () => {},
          onPress: () => {},
        }}
        rightIcon={{ iconName: "mic", onPress: () => {} }}
      />
    </View>
  );
}
