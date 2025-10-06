import { useFormContext } from "react-hook-form";
import { View } from "react-native";
import { SignUpFormValues } from "@/process/signup";
import { EmailInputField, PasswordConfirmInputField, PasswordInputField } from "../foundation";
import LocationAgreement from "../foundation/AuthInputField/LocationAgreement";
import PushNoticeAgreement from "../foundation/AuthInputField/PushNoticeAgreement";

// 이메일, 비밀번호, 비밀번호 확인 입력 필드를 구성하는 레이아웃
export default function SignUpAccount() {
  const { control, resetField } = useFormContext<SignUpFormValues>(); // 상위 RHF 제공자(Provider) 구독

  // 각 스텝 별 회원가입 레이아웃 구조는 모두 동일하기 때문에 상위 컴포넌트에서 레이아웃으로 관리를 하고,
  // 각 스텝 별 레이아웃 구조에서는 JSX 규칙에 따라 하나의 부모가 있어야 하는 조건에 따라 React.Fragment로 관리한다.
  return (
    <>
      <View className="gap-4">
        <EmailInputField control={{ name: "account.email", control }} resetField={resetField} duplicateValid />
        <PasswordInputField control={{ name: "account.password", control }} resetField={resetField} />
        <PasswordConfirmInputField control={{ name: "account.passwordConfirm", control }} resetField={resetField} />
      </View>

      <View className="gap-5">
        <LocationAgreement control={{ name: "account.agreeLocation", control }} />
        <PushNoticeAgreement control={{ name: "account.agreePushNotice", control }} />
      </View>
    </>
  );
}
