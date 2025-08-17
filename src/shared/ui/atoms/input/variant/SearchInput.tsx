import { TextInput, TextInputProps, View } from "react-native";
import { InputRequiredProps, InputStyle } from "../foundation";
import ClearButton from "../part/ClearButton";

type Props = InputRequiredProps & Omit<TextInputProps, keyof InputRequiredProps>;

export default function SearchInput({ value = "", placeholder = "placeholder", onChangeText, onPress }: Props) {
  return (
    <View className={InputStyle.container}>
      <View className={InputStyle.field}>
        <TextInput
          className={InputStyle.text}
          value={value}
          placeholder={placeholder}
          placeholderClassName="text-coolgray-400"
          onChangeText={onChangeText}
        />
        {value.length && <ClearButton onPress={onPress} />}
      </View>
    </View>
  );
}
