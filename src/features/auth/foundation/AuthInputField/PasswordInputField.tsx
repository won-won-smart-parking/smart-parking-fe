import { useState } from "react";
import { FieldPath, FieldValues } from "react-hook-form";
import FormInputController, { Props as FormInputControllerProps } from "../FormInputController";

// type Props = Omit<FormInputControllerProps<SignUpFormValues | SignInFormValues, "account.password" | "password">, "inputField" | "rules">;
type Props<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = Omit<
  FormInputControllerProps<TFieldValues, TName>,
  "inputField" | "rules"
>;

// 비밀번호 입력 필드 및 유효성 검사 규칙 관리 컴포넌트
export default function PasswordInputField<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>(
  props: Props<TFieldValues, TName>,
) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormInputController<TFieldValues, TName>
      {...props}
      rules={{
        required: { value: true, message: "필수 입력 항목입니다." },
        minLength: { value: 8, message: "비밀번호 길이는 최소 8자 이상입니다." },
        pattern: { value: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$"), message: "올바른 비밀번호 형식이 아닙니다." },
      }}
      inputField={{
        title: "비밀번호",
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
