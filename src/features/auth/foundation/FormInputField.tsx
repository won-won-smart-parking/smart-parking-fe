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

export default function FormInputField({ name, label, state, placeholder, ...handler }: Props) {
  return (
    <InputField
      label={label}
      input={{
        placeholder,
        value: state[name].value,
        state: state[name].inputState,
        onChangeText: (text) => handler.handleChangeValue(text, name),
        onPress: () => handler.handleClearPress(name),
        onFocus: () => handler.handleFocus(name),
        onBlur: () => handler.handleBlur(name),
      }}
    />
  );
}
