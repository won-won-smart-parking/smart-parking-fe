import { useFormContext } from "react-hook-form";
import { View } from "react-native";
import { SignUpFormValues } from "@/process/signup";
import { EmailInputField, NameInputField, PasswordConfirmInputField, PasswordInputField } from "../foundation";

export default function SignUpAccount() {
  const { control, resetField } = useFormContext<SignUpFormValues>();

  return (
    <View>
      <NameInputField control={{ name: "account.name", control }} resetField={resetField} />
      <EmailInputField
        control={{
          name: "account.email",
          control,
        }}
        resetField={resetField}
      />
      <PasswordInputField
        control={{
          name: "account.password",
          control,
        }}
        resetField={resetField}
      />
      <PasswordConfirmInputField
        control={{
          name: "account.passwordConfirm",
          control,
        }}
        resetField={resetField}
      />
    </View>
  );
}
