import { FlatList, Pressable, Text, View } from "react-native";
import { elevation } from "@shared/tokens";
import { DefaultListItem } from "@shared/ui/molecules/list-item/variant";
import SearchField from "@shared/ui/molecules/search-field";

interface Props {
  value: string;
  selectedValue?: string; // 단일 선택 값
  filteredData?: { id: string; title: string; description?: string }[]; // 엔터 시 전체 검색 결과
  onChangeText: (text: string) => void;
  onResultPress: () => void; // 검색창 클릭 핸들러
  onSelectItem?: (item: string) => void; // 결과 클릭 시 선택 콜백
}

export default function ResultSearchContainer({
  value,
  selectedValue,
  filteredData = [],
  onChangeText,
  onResultPress,
  onSelectItem,
}: Props) {
  const hasFilteredResults = !selectedValue && filteredData.length > 0;

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
          // 단일 선택 값이 있는 경우
          <Text className="text-neutral-800">
            선택한 검색 값: <Text className="font-semibold">{selectedValue}</Text>
          </Text>
        ) : hasFilteredResults ? (
          // 필터링된 값 있는 경우
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <DefaultListItem title={item.title} description={item.description} onPress={() => onSelectItem?.(item.title)} />
            )}
            ListEmptyComponent={<Text className="text-neutral-500">검색 결과가 없습니다.</Text>}
          />
        ) : (
          // 초기 상태나 결과 없음
          <Text className="text-neutral-500">검색 결과를 선택해주세요.</Text>
        )}
      </View>
    </View>
  );
}
