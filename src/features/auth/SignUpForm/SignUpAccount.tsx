import { useFormContext } from "react-hook-form";
import { View } from "react-native";
import { SignUpFormValues } from "@/process/signup";
import { EmailInputField, NameInputField, PasswordConfirmInputField, PasswordInputField } from "../foundation";
import LocationAgreement from "../foundation/AuthInputField/LocationAgreement";
import PushNoticeAgreement from "../foundation/AuthInputField/PushNoticeAgreement";

export default function SignUpAccount() {
  const { control, resetField } = useFormContext<SignUpFormValues>();

  return (
    <>
      <View className="gap-4">
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

      <View className="gap-5">
        <LocationAgreement control={{ name: "account.agreeLocation", control }} />
        <PushNoticeAgreement control={{ name: "account.agreePushNotice", control }} />
      </View>
    </>
  );
}
