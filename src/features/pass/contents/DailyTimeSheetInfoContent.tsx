import { View } from "react-native";
import { Text } from "@shared/ui/atoms";

export default function DailyTimeSheetInfoContent() {
  return (
    <View className="items-center gap-3">
      <Text typography="body-md" className="text-center font-normal">
        입차 예정 시간보다 빨리 또는 늦게 입차해도{" "}
        <Text typography="body-md" className="text-blue-400">
          유효시간 내에만 입차
        </Text>
        하면 이용이 가능합니다.
      </Text>

      <Text typography="caption-sm" className="text-neutral-900">
        &#8251;​​ 유효시간을 벗어날 경우 사용이 불가능합니다.
      </Text>
    </View>
  );
}
