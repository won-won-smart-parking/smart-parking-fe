import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { SignUpFormValues } from "@/process/signup";
import FormInputController, { Props as FormInputControllerProps } from "../FormInputController";

type Props = Omit<FormInputControllerProps<SignUpFormValues, "account.passwordConfirm">, "inputField" | "rules">;

// 비밀번호 확인 입력 필드 및 유효성 검사 규칙 관리 컴포넌트
export default function PasswordConfirmInputField(props: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const { watch } = useFormContext<SignUpFormValues>();

  return (
    <FormInputController<SignUpFormValues, "account.passwordConfirm">
      {...props}
      rules={{
        required: { value: true, message: "필수 입력 항목입니다." },
        minLength: { value: 8, message: "비밀번호 길이는 최소 8자 이상입니다." },
        pattern: { value: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$"), message: "올바른 비밀번호 형식이 아닙니다." },
        validate(value: string) {
          if (watch("account.password") !== value) {
            return "비밀번호가 일치하지 않습니다.";
          }
        },
      }}
      inputField={{
        title: "비밀번호 확인",
        input: {
          placeholder: "･････････",
          secureTextEntry: !showPassword,
          icon: {
            hidden: "eyeOffOutline",
            visible: "eyeOnOutline",
            onPress: () => setShowPassword((show) => !show),
          },
        },
      }}
    />
  );
}
