import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { instance } from "@global/utils/axios";
import { DefaultListItem } from "@shared/ui/molecules/list-item/variant";
import SearchField from "@shared/ui/molecules/search-field";

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit: (value: string, filteredData: { id: string; title: string; description?: string }[]) => void;
  onBack: () => void;
  onSelect: (value: string) => void;
  onClear: () => void; // 검색어 및 선택값 초기화 핸들러
  recentSearches: string[]; // 최근 검색어 리스트
  onDeleteRecentSearch: (value: string) => void; // 최근 검색어 삭제 핸들러
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
  const [filteredData, setFilteredData] = useState<{ id: string; title: string; description?: string }[]>([]);
  const [loading, setLoading] = useState(false);

  // 검색어 변경 시 API 호출하여 필터링된 데이터 가져오기
  useEffect(() => {
    if (!value) {
      setFilteredData([]);
      setLoading(false);
      return;
    }

    // 디바운스 처리
    setLoading(true);
    const handler = setTimeout(() => {
      instance
        .get("/api/search", { params: { search: value } })
        .then((res) => {
          setFilteredData(res.data.results);
          setLoading(false);
        })
        .catch(() => {
          setFilteredData([]);
          setLoading(false);
        });
    }, 300);

    return () => clearTimeout(handler);
  }, [value]);

  // 엔터 키 입력 시 검색 실행
  const handleEnter = () => {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      onSubmit(value, []);
      return;
    }

    instance
      .get("/api/search", { params: { search: trimmedValue } })
      .then((res) => onSubmit(trimmedValue, res.data.results))
      .catch(() => onSubmit(trimmedValue, []));
  };

  return (
    <View className="flex-1 bg-white">
      {/* 검색창 */}
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

      {/* 검색 리스트 확인용 */}
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
