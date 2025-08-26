import { TextInput, type TextInputProps, View } from "react-native";
import { type InputRequiredProps, InputStyle } from "../foundation";
import ClearButton from "../part/ClearButton";

export type Props = InputRequiredProps & Omit<TextInputProps, keyof InputRequiredProps>;

/**
 * Atom / Input (Search Input)
 *
 * 검색용 Input 입니다. 기본 입력 필드와 Clear 버튼만 제공하는 컴포넌트입니다.
 * 비즈니스 로직은 포함하지 않고, 외부 상태와 이벤트 핸들러를 전달받아 동작합니다.
 *
 * @param props.value         입력 값
 * @param props.placeholder   안내 문구
 * @param props.onChangeText  텍스트 변경 이벤트 핸들러
 * @param props.onPress       Clear 버튼 눌림(초기화) 이벤트 핸들러
 *
 * @example
 * <SearchInput
 *   value={query}
 *   placeholder="검색어를 입력하세요"
 *   onChangeText={setQuery}
 *   onPress={() => setQuery("")}
 * />
 *
 * @returns ReactElement SearchInput Component
 */
export default function SearchInput({ value = "", placeholder = "placeholder", onChangeText, onPress }: Props) {
  return (
    <View className={InputStyle.container}>
      <View className={InputStyle.field}>
        <TextInput
          className={InputStyle.text}
          value={value}
          placeholder={placeholder}
          placeholderClassName="text-coolgray-400"
          onChangeText={onChangeText}
        />
        {value.length && <ClearButton onPress={onPress} />}
      </View>
    </View>
  );
}
