import { PressableProps, TextInputProps } from "react-native";

/**
 * Atom / Input - Base
 *
 * 모든 Input 종류(Variant, Underline Input | Search Input)에서 공통적으로 사용하는 속성(Props) 타입과 스타일을 정의한 파일입니다.
 * 이를 분리하여 관리함으로써 각 컴포넌트가 명확한 역할을 수행하고, 불필요한 결합도를 낮추기 위함입니다.
 */

// TextInputProps와 PressableProps를 통해 각 Input 종류마다 반드시 필요로 하는 Props 타입 정의
// [ TextInputProps ]
// -> value: TextInput의 기본값
// -> placeholder: TextInput의 안내 문구
// -> onChangeText: TextInput의 변경(Change) 감지 이벤트 핸들러
//
// [ PressableProps ]
// -> onPress: Clear Button의 눌림(Press) 감지 이벤트 핸들러
type InputRequiredProps = Required<
  Pick<TextInputProps, "value" | "placeholder" | "onChangeText"> & Pick<PressableProps, "onPress">
>;

// 각 Input 종류마다 기본적으로 적용되는 Base 스타일
const InputStyle = {
  container: "flex w-full flex-row justify-center items-center gap-2 p-1",
  field: "flex-1 flex flex-row justify-center items-center",
  text: "flex-1 text-neutral-1000 text-base-tall font-normal",
};

export { InputRequiredProps, InputStyle };
