import { InputState } from "@shared/ui/atoms/input/foundation";
import InputField from "@shared/ui/molecules/input-field";
import { LoginFormType } from "../LoginForm/loginFormType";

interface Props {
  name: keyof LoginFormType;
  label: string;
  state: InputState;
  value: string;
  placeholder: string;
  onChangeText: (text: string, name: keyof LoginFormType) => void;
  onPress: (name: keyof LoginFormType) => void;
  onFocus: (name: keyof LoginFormType) => void;
  onBlur: (name: keyof LoginFormType) => void;
}

export default function FormInputField({ name, label, state, value, placeholder, onChangeText, onPress, onFocus, onBlur }: Props) {
  return (
    <InputField
      label={label}
      input={{
        value,
        placeholder,
        state,
        onChangeText: (text) => onChangeText(text, name),
        onPress: () => onPress(name),
        onFocus: () => onFocus(name),
        onBlur: () => onBlur(name),
      }}
    />
  );
}
