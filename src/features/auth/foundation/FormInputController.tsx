import { Control, type FieldPath, type FieldValues, type RegisterOptions, useController, type UseFormResetField } from "react-hook-form";
import InputField, { type Props as InputFieldProps } from "@shared/ui/molecules/input-field";
import useInputState from "./useInputState";

export interface Props<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> {
  inputField: {
    title: InputFieldProps["title"];
    input: Required<Pick<InputFieldProps["input"], "placeholder">> &
      Partial<Pick<InputFieldProps["input"], "secureTextEntry" | "icon">> &
      Partial<InputFieldProps["input"]>;
    messaeg?: InputFieldProps["message"];
    button?: InputFieldProps["button"];
  };
  control: {
    name: TName;
    control: Control<TFieldValues>;
  };
  rules: RegisterOptions<TFieldValues, TName>;
  resetField?: UseFormResetField<TFieldValues>;
}

/**
 * FormInputController
 * - 각 입력 필드의 기반을 담당하는 컴포넌트 역할을 수행한다.
 * - 상위 FormProvider와 연결되어 React Hook Form의 제어 하에 값(value)과 유효성 검증을 수행한다.
 * - 동시에 각 입력 필드의 UI 상태는 useInputState 커스텀 훅을 통해 독립적으로 제어한다.
 */
export default function FormInputController<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  inputField,
  control,
  rules,
  resetField,
}: Props<TFieldValues, TName>) {
  const {
    field: { name, onBlur: onRHFBlur, onChange: onChangeText, ref, value },
    fieldState: { invalid, error },
  } = useController<TFieldValues, TName>({ ...control, rules });
  // 1. control 객체를 통해 상위 React Hook Form에 연결한다.
  // 2. name 속성을 통해 연결한 React Hook Form의 입력 필드랑 연결한다.

  const { state: inputState, ...handler } = useInputState(invalid); // 유효성 검사 오류를 초기값으로 전달한다.

  // UI만 구성한 InputField를 재사용함과 동시에 React Hook Form을 통해서 관리한다.
  // 단, Border의 상태는 현재 컴포넌트(FormInputController.tsx)에서 각 입력 필드마다 독립적으로 관리한다.
  return (
    <InputField
      title={inputField.title}
      input={{
        ...inputField.input,
        value,
        ref,
        onChangeText,
        onClearPress: () => resetField?.(name, { keepError: true }),
        onFocus: () => handler.handleFocus(),
        onBlur: () => {
          onRHFBlur(); // React Hook Form에서 제공하는 onBlur를 사용해야 mode=onBlur가 올바르게 동작하여 유효성 검사를 수행한다.
          handler.handleBlur();
        },
        placeholder: inputField.input.placeholder,
        secureTextEntry: inputField.input.secureTextEntry,
        state: inputState,
        icon: inputField.input.icon,
      }}
      button={inputField.button}
      message={(error && error.message) || inputField.messaeg}
    />
  );
}
