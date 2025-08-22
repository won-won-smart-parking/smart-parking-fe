import { View } from "react-native";
import Text from "@shared/ui/atoms/text";

// smartparking://parking-pass
export default function TicketDetail() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text typography="display-default">일일권</Text>
    </View>
  );
}
