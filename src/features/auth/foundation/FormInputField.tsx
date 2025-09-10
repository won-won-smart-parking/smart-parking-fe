import InputField, { Props as InputFieldProps } from "@shared/ui/molecules/input-field";

export default function FormInputField({ title, input, message, button }: InputFieldProps) {
  return <InputField title={title} input={input} message={message} button={button} />;
}
