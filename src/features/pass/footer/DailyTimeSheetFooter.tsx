import { FlatList, ListRenderItem, View } from "react-native";
import { Button, Text } from "@shared/ui/atoms";

interface RenderItem {
  id: number;
  component: React.JSX.Element;
}

interface Props {
  data: RenderItem[];
  onPress: () => void;
}

// FlatList의 data 속성을 기반으로 각 항목을 렌더링하는 컴포넌트
const renderItem: ListRenderItem<RenderItem> = ({ item }) => (
  <View className="flex-row gap-1.5">
    <Text typography="caption-md" className="text-neutral-900">
      &bull;
    </Text>
    <View className="flex-1">{item.component}</View>
  </View>
);

export default function DailyTimeSheetFooter({ data, onPress }: Props) {
  return (
    <View className="gap-4 bg-coolgray-100 p-5">
      <FlatList
        scrollEnabled={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View className="h-2" />}
      />

      <Button
        variant="label"
        label="닫기"
        palette={{
          bgColor: "bg-blue-300",
          bgPressedColor: "bg-coolgray-300",
          textColor: "text-neutral-100",
          textPressedColor: "text-coolgray-500",
        }}
        onPress={onPress}
      />
    </View>
  );
}
