import { SignUpFormValues } from "@/process/signup";
import FormInputController, { Props as FormInputControllerProps } from "../FormInputController";

type Props = Omit<FormInputControllerProps<SignUpFormValues, "account.email">, "inputField" | "rules">;

// 이메일 입력 필드 및 유효성 검사 규칙 관리 컴포넌트
export default function EmailInputField(props: Props) {
  return (
    <FormInputController<SignUpFormValues, "account.email">
      {...props}
      rules={{
        required: { value: true, message: "필수 입력 항목입니다." },
        pattern: { value: new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$", "i"), message: "올바른 이메일 형식이 아닙니다." },
      }}
      inputField={{
        title: "이메일",
        input: {
          placeholder: "email@google.com",
        },
      }}
    />
  );
}
