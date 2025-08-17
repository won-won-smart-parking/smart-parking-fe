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

/**
 * Atom / Input (Underline Input)
 *
 * 밑줄 스타일을 가진 Input 컴포넌트입니다. state 값에 따라 스타일이 달라지며,
 * 아이콘과 Clear 버튼을 조건부로 렌더링 할 수 있습니다. 비즈니스 로직은 포함하지 않고, 외부 상태와 이벤트 핸들러를 전달받아 동작합니다.
 *
 * @param props.icon          오른쪽에 표시될 아이콘 설정 (옵션, 비밀번호 토글 등)
 * @param props.value         입력 값
 * @param props.placeholder   안내 문구
 * @param props.onChangeText  텍스트 변경 이벤트 핸들러
 * @param props.onClear       Clear 버튼 클릭 이벤트 핸들러
 * @param props.onFocus       포커스 이벤트 핸들러
 * @param props.onEndEditing  입력 종료 이벤트 핸들러
 *
 * @example
 * // 기본 사용
 * <UnderlineInput
 *   state="default"
 *   value={value}
 *   placeholder="비밀번호"
 *   onChangeText={setValue}
 *   onClear={() => setValue("")}
 * />
 *
 * // 아이콘(비밀번호 보기 토글) 포함
 * <UnderlineInput
 *   state="default"
 *   value={password}
 *   placeholder="비밀번호"
 *   onChangeText={setPassword}
 *   onClear={() => setPassword("")}
 *   icon={{
 *     revealed: showPassword,
 *     hidden: "eye-off",
 *     visible: "eye",
 *     onPress: togglePasswordVisibility
 *   }}
 * />
 *
 * @returns ReactElement UnderlineInput Component
 */
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
