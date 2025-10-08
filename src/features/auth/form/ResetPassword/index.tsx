import { useController, useForm } from "react-hook-form";
import { View } from "react-native";
import { SubmitButton } from "@features/auth/buttons";
import { EmailInputField, PasswordConfirmInputField, PasswordInputField } from "@features/auth/fields";
import { ResetPasswordFormValues } from "./index.type";
import useConfirmEmail from "./useConfirmEmail";
import useResetPasswordSubmit from "./useResetPasswordSubmit";

export default function ResetPassword() {
  const {
    control,
    resetField,
    watch,
    setError,
    getValues,
    handleSubmit,
    formState: { isValid },
  } = useForm<ResetPasswordFormValues>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      newPassword: "",
      newPasswordConfirm: "",
    },
  });
  const {
    fieldState: { isDirty, invalid },
  } = useController({ control, name: "email" });

  const { isEmailConfirm, handleEmailConfirmPress } = useConfirmEmail(invalid, setError); // 이메일 인증 버튼 커스텀 훅
  const { handleResetPasswordSubmit } = useResetPasswordSubmit();

  return (
    <View className="flex-1 justify-between">
      <View className="gap-3">
        <EmailInputField
          control={{ control: control, name: "email" }}
          resetField={resetField}
          confirmButton={{
            label: "이메일 인증",
            disabled: !isDirty || isEmailConfirm,
            onPress: () => handleEmailConfirmPress(getValues("email")),
          }}
        />
        <PasswordInputField
          control={{ control: control, name: "newPassword" }}
          resetField={resetField}
          title="새로운 비밀번호"
          disabled={!isEmailConfirm}
        />
        <PasswordConfirmInputField
          control={{ control: control, name: "newPasswordConfirm" }}
          resetField={resetField}
          watch={watch}
          title="새로운 비밀번호 확인"
          confirmTarget="newPassword"
          disabled={!isEmailConfirm}
        />
      </View>

      {/* RHF에 연결된 모든 Input Field의 값에 대한 유효성 에러가 발생하지 않은 경우 disabled 해제 */}
      <SubmitButton label="수정하기" disabled={!isValid} onPress={handleSubmit(handleResetPasswordSubmit)} />
    </View>
  );
}
