import clsx from "clsx";
import { RefCallBack } from "react-hook-form";
import { Pressable, TextInput, type TextInputProps, View } from "react-native";
import Icon from "@shared/ui/atoms/icon";
import type { IconName } from "@shared/ui/atoms/icon/variant";
import { type InputRequiredProps, type InputState, InputStyle } from "../foundation";
import ClearButton from "../part/ClearButton";

export interface Props extends InputRequiredProps, Omit<TextInputProps, keyof InputRequiredProps> {
  state: InputState;
  icon?: {
    hidden: IconName;
    visible: IconName;
    onPress: () => void;
  };
  ref: RefCallBack;
  onClearPress: () => void;
}

/**
 * Atom / Input (Underline Input)
 *
 * 밑줄 스타일을 가진 Input 컴포넌트입니다. state 값에 따라 스타일이 달라지며,
 * 아이콘과 Clear 버튼을 조건부로 렌더링 할 수 있습니다. 비즈니스 로직은 포함하지 않고, 외부 상태와 이벤트 핸들러를 전달받아 동작합니다.
 *
 * @param props.input            RN / TextInput 컴포넌트에 전달할 props 구성
 * @param props.ref              상위에서 전달된 참조 객체를 내부 요소에 연결하기 위한 속성
 * @param props.state            Underline Input의 밑줄 색상 변화 및 배경색을 구별할 수 있는 Input 상태
 * @param props.onClearPress    RN / Text Input 컴포넌트에 입력된 문자열 전체 삭제 onPress 이벤트 핸들러
 * @param props.icon             TextInput의 보조 이벤트를 전달할 수 있는 아이콘 버튼 구성
 *
 * @example
 * // 기본 사용
 * <UnderlineInput
 *   state="default"
 *   value={value}
 *   placeholder="비밀번호"
 *   onChangeText={setValue}
 *   onPress={() => setValue("")}
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
export default function UnderlineInput({ state, icon, ref, onClearPress, ...input }: Props) {
  return (
    <View
      className={clsx(
        InputStyle.container,
        "border-b",
        state === "default" && "border-neutral-700",
        state === "focus" && "border-blue-300",
        state === "error" && "border-red-300",
        input.readOnly && "border-neutral-700 bg-neutral-200",
      )}
    >
      <View className={InputStyle.field}>
        <TextInput
          {...input}
          ref={ref}
          className={InputStyle.text}
          value={input.value}
          placeholder={input.placeholder}
          readOnly={input.readOnly}
          placeholderClassName="text-coolgray-400"
          onChangeText={input.onChangeText}
          onFocus={input.onFocus}
          onBlur={input.onBlur}
          secureTextEntry={input.secureTextEntry}
        />
        {input.value.length ? <ClearButton onPress={onClearPress} /> : null}
      </View>

      {/* 비밀번호 표시와 같은 Icon 버튼 조건부 렌더링 */}
      {icon && (
        <Pressable onPress={icon.onPress} className="p-0.5">
          <Icon name={input.secureTextEntry ? icon.hidden : icon.visible} className="w-5 text-neutral-850" />
        </Pressable>
      )}
    </View>
  );
}
