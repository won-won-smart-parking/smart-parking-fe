import clsx from "clsx";
import { Pressable, TextInput, TextInputProps, View } from "react-native";
import Icon from "../../icon";
import { IconName } from "../../icon/variants";
import { InputRequiredProps, InputStyle } from "../foundation";
import ClearButton from "../part/ClearButton";

interface Props extends InputRequiredProps, Omit<TextInputProps, keyof InputRequiredProps> {
  state: "default" | "focus" | "error" | "disabled";
  icon?: {
    revealed: boolean;
    hidden: IconName;
    visible: IconName;
    onPress: () => void;
  };
}

export default function UnderlineInput({
  state,
  icon,
  value = "",
  placeholder = "placeholder",
  onChangeText,
  onEndEditing,
  onFocus,
  onPress: onClear,
}: Props) {
  return (
    <View
      className={clsx(
        InputStyle.container,
        "border-b",
        state === "default" && "border-neutral-700",
        state === "focus" && "border-blue-300",
        state === "error" && "border-red-300",
        state === "disabled" && "border-blue-300 bg-neutral-200",
      )}
    >
      <View className={InputStyle.field}>
        <TextInput
          className={InputStyle.text}
          value={value}
          placeholder={placeholder}
          placeholderClassName="text-coolgray-400"
          onChangeText={onChangeText}
          onFocus={onFocus}
          onEndEditing={onEndEditing}
        />
        {value.length && <ClearButton onPress={onClear} />}
      </View>

      {/* 비밀번호 표시와 같은 Icon 버튼 조건부 렌더링 */}
      {icon && (
        <Pressable onPress={icon.onPress} className="p-0.5">
          <Icon name={!icon.revealed ? icon.hidden : icon.visible} className="w-5 text-neutral-850" />
        </Pressable>
      )}
    </View>
  );
}
