import { Pressable, Text, View } from "react-native";
import { elevation } from "@shared/tokens";
import SearchField from "@shared/ui/molecules/search-field";

interface Props {
  value: string;
  selectedValue?: string; // 선택된 값
  onChangeText: (text: string) => void;
  onResultPress: () => void; // 검색창 클릭 핸들러
}

export default function ResultSearchContainer({ value, selectedValue, onChangeText, onResultPress }: Props) {
  return (
    <View className="flex-1 bg-neutral-100 px-3 py-2" style={elevation.floating}>
      <Pressable onPress={onResultPress}>
        <SearchField
          leftIcon={{ iconName: "menu", onPress: () => {} }}
          rightIcon={{ iconName: "mic", onPress: () => {} }}
          input={{
            value: selectedValue || value, // 선택된 값이 있으면 검색창에 표시
            onChangeText,
            placeholder: "",
            onPress: () => {},
            onFocus: onResultPress,
            clearButton: false, // 클리어 버튼 비활성화
          }}
        />
      </Pressable>

      <View className="mt-4">
        {selectedValue ? (
          <Text className="text-neutral-800">
            선택한 검색 값: <Text className="font-semibold">{selectedValue}</Text>
          </Text>
        ) : (
          <Text className="text-neutral-500">검색 결과를 선택해주세요.</Text>
        )}
      </View>
    </View>
  );
}
