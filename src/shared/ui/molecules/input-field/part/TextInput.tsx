import { Input } from "@shared/ui/atoms";
import { UnderlineInputProps } from "@shared/ui/atoms/input/variant";

export default function TextInput({ state, value, onChangeText, onPress, placeholder }: UnderlineInputProps) {
  return (
    <Input
      variant="underline"
      state={state}
      value={value}
      onChangeText={onChangeText}
      onPress={onPress}
      placeholder={placeholder}
    />
  );
}
