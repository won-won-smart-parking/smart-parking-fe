import { SignUpFormValues } from "@/process/signup";
import FormInputController, { Props as FormInputControllerProps } from "../FormInputController";

type Props = Omit<FormInputControllerProps<SignUpFormValues, "validation.birthday">, "inputField" | "rules">;

export default function DateInputField(props: Props) {
  return (
    <FormInputController
      {...props}
      rules={{
        required: { value: true, message: "필수 입력 항목입니다." },
      }}
      inputField={{
        title: "생년월일",
        input: {
          placeholder: "2000.01.01",
        },
      }}
    />
  );
}
