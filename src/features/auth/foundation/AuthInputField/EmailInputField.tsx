import { FieldPath, FieldValues } from "react-hook-form";
import { validateDuplicateEmail } from "@entities/auth/auth.api";
import FormInputController, { Props as FormInputControllerProps } from "../FormInputController";

// type Props = Omit<FormInputControllerProps<SignUpFormValues | SignInFormValues, "account.email" | "email">, "inputField" | "rules">;
type Props<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = Omit<
  FormInputControllerProps<TFieldValues, TName>,
  "inputField" | "rules"
>;

// 이메일 입력 필드 및 유효성 검사 규칙 관리 컴포넌트
export default function EmailInputField<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>(
  props: Props<TFieldValues, TName>,
) {
  return (
    <FormInputController<TFieldValues, TName>
      {...props}
      rules={{
        required: { value: true, message: "필수 입력 항목입니다." },
        pattern: { value: new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$", "i"), message: "올바른 이메일 형식이 아닙니다." },

        // RHF에서 제공하는 rules 기본 구성 옵션 외에 사용자 정의 유효성 검증 규칙 구성 메서드
        validate: async (value) => {
          if (!value) return; // 입력값이 없을 경우에는 유효성 검사를 시도하지 않고 넘어간다.

          const { status, message } = await validateDuplicateEmail(value);

          if (status) return;
          else {
            return message;
          }
        },
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
