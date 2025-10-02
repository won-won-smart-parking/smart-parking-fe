import { SignUpFormValues } from "@/process/signup";
import FormInputController, { Props as FormInputControllerProps } from "../FormInputController";

type Props = Omit<FormInputControllerProps<SignUpFormValues, "validation.name">, "inputField" | "rules">;

// 이름 입력 필드 및 유효성 검사 규칙 관리 컴포넌트
export default function NameInputField(props: Props) {
  return (
    <FormInputController<SignUpFormValues, "validation.name">
      {...props}
      rules={{ required: { value: true, message: "필수 입력 항목입니다." } }}
      inputField={{
        title: "이름",
        input: {
          placeholder: "이름을 입력해주세요.",
        },
      }}
    />
  );
}
