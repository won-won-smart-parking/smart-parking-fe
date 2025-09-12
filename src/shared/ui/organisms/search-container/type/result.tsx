import { View } from "react-native";
import SearchField from "@shared/ui/molecules/search-field";

export default function ResultSearchContainer() {
  return (
    <View>
      <SearchField
        leftIcon={{ iconName: "menu", onPress: () => {} }}
        rightIcon={{ iconName: "mic", onPress: () => {} }}
        input={{
          placeholder: "",
          value: "",
          onChangeText: () => {},
          onPress: () => {},
        }}
      />
    </View>
  );
}
