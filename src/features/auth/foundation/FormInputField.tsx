import InputField from "@shared/ui/molecules/input-field";
import { LoginFormType } from "../LoginForm/loginFormType";

interface Props {
  name: keyof LoginFormType;
  label: string;
  state: LoginFormType;
  placeholder: string;
  handleChangeValue: (text: string, name: keyof LoginFormType) => void;
  handleClearPress: (name: keyof LoginFormType) => void;
  handleFocus: (name: keyof LoginFormType) => void;
  handleBlur: (name: keyof LoginFormType) => void;
}

export default function FormInputField({
  name,
  label,
  state,
  placeholder,
  handleChangeValue,
  handleClearPress,
  handleFocus,
  handleBlur,
}: Props) {
  return (
    <InputField
      label={label}
      input={{
        placeholder,
        value: state[name].value,
        state: state[name].inputState,
        onChangeText: (text) => handleChangeValue(text, name),
        onPress: () => handleClearPress(name),
        onFocus: () => handleFocus(name),
        onBlur: () => handleBlur(name),
      }}
    />
  );
}
