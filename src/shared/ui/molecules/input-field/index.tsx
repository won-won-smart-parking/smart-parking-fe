import { View } from "react-native";
import { Text } from "@shared/ui/atoms";
import HelperText from "./part/HelperText";
import TextInput from "./part/TextInput";

export default function InputField() {
  return (
    <View>
      <Text></Text>

      <View>
        <TextInput />
        <HelperText />
      </View>
    </View>
  );
}
