import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { DefaultListItem } from "@shared/ui/molecules/list-item/variant";
import SearchField from "@shared/ui/molecules/search-field";

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit: (value: string, filteredData: { id: string; title: string; description?: string }[]) => void;
  onBack: () => void;
  onSelect: (value: string) => void;
  onClear: () => void;
  recentSearches: string[];
  onDeleteRecentSearch: (value: string) => void;
}

export default function FocusedSearchContainer({
  value,
  onChangeText,
  onBack,
  onSelect,
  onClear,
  recentSearches,
  onDeleteRecentSearch,
  onSubmit,
}: Props) {
  const [mockData, setMockData] = useState<{ id: string; title: string; description?: string }[]>([]);
  const [filteredData, setFilteredData] = useState(mockData);
  const [loading, setLoading] = useState(false);

  // search API로부터 mock 데이터 불러오기
  useEffect(() => {
    fetch("https://api.example.com/api/search")
      .then((res) => res.json())
      .then((data) => setMockData(data.results))
      .catch(() => setMockData([]));
  }, []);

  // 디바운싱 처리
  useEffect(() => {
    if (!value) {
      setFilteredData([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    const handler = setTimeout(() => {
      setFilteredData(
        mockData.filter(
          (item) => item.title.toLowerCase().includes(value.toLowerCase()) || item.description?.toLowerCase().includes(value.toLowerCase()),
        ),
      );
      setLoading(false);
    }, 300);

    return () => clearTimeout(handler);
  }, [value, mockData]);

  const handleEnter = () => {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      console.log("검색어가 없음");
      onSubmit(value, []); // 검색값이 없으면 빈 배열 전달
      return;
    }

    const currentFiltered = mockData.filter(
      (item) =>
        item.title.toLowerCase().includes(trimmedValue.toLowerCase()) ||
        item.description?.toLowerCase().includes(trimmedValue.toLowerCase()),
    );

    console.log("엔터 입력 value:", trimmedValue, "filteredData:", currentFiltered);
    onSubmit(trimmedValue, currentFiltered);
  };

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
            onSubmitEditing: handleEnter,
          }}
          rightIcon={{ iconName: "mic" }}
        />
      </View>

      {loading ? (
        <View className="flex items-center justify-center py-6">
          <Text className="text-neutral-500">검색 중...</Text>
        </View>
      ) : value.length > 0 ? (
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
      ) : recentSearches.length > 0 ? (
        <FlatList
          data={recentSearches}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <DefaultListItem title={item} onPress={() => onSelect(item)} iconName="cancel" onIconPress={() => onDeleteRecentSearch(item)} />
          )}
        />
      ) : (
        <View className="flex items-center justify-center py-6">
          <Text className="text-neutral-400">검색어를 입력해보세요.</Text>
        </View>
      )}
    </View>
  );
}
