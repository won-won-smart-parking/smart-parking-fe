import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { DefaultListItem } from "@shared/ui/molecules/list-item/variant";
import { Props as ListItemProps } from "@shared/ui/molecules/list-item/variant/DefaultListItem";
import SearchField from "@shared/ui/molecules/search-field";

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
  onBack: () => void;
  onSelect: (value: string) => void;
  onClear: () => void;
}

type SearchResult = Pick<ListItemProps, "title" | "description"> & { id: string };

export default function FocusedSearchContainer({ value, onChangeText, onClear, onBack, onSelect }: Props) {
  const [mockData, setMockData] = useState<SearchResult[]>([]);
  const [filteredData, setFilteredData] = useState<SearchResult[]>([]);

  // search API로부터 mock 데이터 불러오기
  useEffect(() => {
    fetch("https://api.example.com/api/search")
      .then((res) => res.json())
      .then((data) => setMockData(data.results))
      .catch(() => setMockData([]));
  }, []);

  // 검색어 필터링
  useEffect(() => {
    if (!value) {
      setFilteredData([]);
      return;
    }

    const filtered = mockData.filter(
      (item) => item.title.toLowerCase().includes(value.toLowerCase()) || item.description?.toLowerCase().includes(value.toLowerCase()),
    );

    setFilteredData(filtered);
  }, [value, mockData]);

  const showList = value.length > 0;

  return (
    <View className="flex-1 bg-white">
      <View className="border-b border-neutral-400 px-3 py-2">
        <SearchField
          leftIcon={{ iconName: "arrowLeft", onPress: onBack }}
          input={{
            placeholder: "검색어를 입력하세요.",
            value,
            onChangeText,
            onPress: onClear,
            autoFocus: true,
          }}
          rightIcon={{ iconName: "mic" }}
        />
      </View>

      {showList ? (
        filteredData.length > 0 ? (
          <FlatList
            className="bg-neutral-200"
            data={filteredData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <DefaultListItem
                title={item.title}
                description={item.description}
                onPress={() => onSelect(item.title)}
                iconName="arrowRight"
              />
            )}
          />
        ) : (
          <View className="flex items-center justify-center py-6">
            <Text className="text-neutral-500">검색 결과가 없습니다.</Text>
          </View>
        )
      ) : (
        <View className="flex items-center justify-center py-6">
          <Text className="text-neutral-400">검색어를 입력해보세요.</Text>
        </View>
      )}
    </View>
  );
}
