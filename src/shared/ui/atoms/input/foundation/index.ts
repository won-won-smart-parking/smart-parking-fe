import { PressableProps, TextInputProps } from "react-native";

// RN에서 지원하는 TextInputProps 타입은 ViewProps를 상속받음
// InputBase에서 필요한 속성은 TextInputProps에서 제공을 하기 때문에 Pick 유틸리티 타입을 통해 특정 속성만 추출후,
// Required 유틸리티 타입을 통해 반드시 받아야 되는 Props로 정의한다. (Pick은 선택적 타입이기 때문)
type INPUT_BASE_TYPE = Required<
  Pick<TextInputProps, "value" | "placeholder" | "onChangeText"> & Pick<PressableProps, "onPress">
>;
const INPUT_CONTAINER_BASE_STYLE = "flex w-full flex-row justify-center items-center gap-2 p-1";
const INPUT_FILED_BASE_STYLE = "flex-1 flex flex-row justify-center items-center";
const INPUT_BASE_STYLE = "flex-1 text-neutral-1000 text-base-tall font-normal";

export { INPUT_BASE_TYPE, INPUT_CONTAINER_BASE_STYLE, INPUT_FILED_BASE_STYLE, INPUT_BASE_STYLE };
