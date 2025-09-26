import { View } from "react-native";
import { Text } from "@shared/ui/atoms";

// smartparking://favorites
export default function Notice() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text typography="display-default">공지사항 페이지</Text>
    </View>
  );
}
