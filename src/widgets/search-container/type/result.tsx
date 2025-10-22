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
  onSelectItem?: (item: string) => void; // 검색 결과 아이템 선택 핸들러
}

export default function ResultSearchContainer({
  value,
  selectedValue,
  filteredData = [],
  onChangeText,
  onResultPress,
  onSelectItem,
}: Props) {
  // 필터링된 다중 결과가 있는지
  const filteredResults = !selectedValue && filteredData.length > 0;

  return (
    <View className="flex-1 bg-neutral-100 px-3 py-2" style={elevation.floating}>
      {/* 검색창 */}
      <Pressable onPress={onResultPress}>
        <SearchField
          leftIcon={{ iconName: "menu", onPress: () => {} }}
          rightIcon={{ iconName: "mic", onPress: () => {} }}
          input={{
            value: selectedValue || value, // 검색값 또는 선택값 표시
            onChangeText,
            placeholder: "",
            onPress: () => {},
            onFocus: onResultPress, // 포커스 시 결과 페이지로 이동
            clearButton: false, // 클리어 버튼 비활성화
          }}
        />
      </Pressable>

      {/* 검색 결과값 확인용 */}
      <View className="mt-4">
        {selectedValue ? (
          // 단일 선택 값이 있는 경우
          <Text className="text-neutral-800">
            선택한 검색 값: <Text className="font-semibold">{selectedValue}</Text>
          </Text>
        ) : filteredResults ? (
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
          // 검색어가 없는 경우
          <Text className="text-neutral-500">검색어를 입력해 주세요.</Text>
        )}
      </View>
    </View>
  );
}
