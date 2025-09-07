import InputField from "@shared/ui/molecules/input-field";

export default function NameInputField() {
  return (
    <InputField
      label="이름"
      input={{
        state: "default",
        placeholder: "Smart Parking...",
        value: "",
        onPress() {},
        onChangeText() {},
      }}
    />
  );
}
