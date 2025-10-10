import { FlatList, Text, View } from "react-native";
import { DefaultListItem } from "@shared/ui/molecules/list-item/variant";
import SearchField from "@shared/ui/molecules/search-field";
import { dummyData } from "./dummyData";

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
  onBack: () => void;
  onSelect: (value: string) => void;
  onClear: () => void;
}

export default function FocusedSearchContainer({ value, onChangeText, onClear, onBack, onSelect }: Props) {
  const filteredData = dummyData.filter(
    (item) =>
      item.title.toLowerCase().includes(value.toLowerCase()) ||
      item.description?.toLowerCase().includes(value.toLowerCase()),
  );

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
