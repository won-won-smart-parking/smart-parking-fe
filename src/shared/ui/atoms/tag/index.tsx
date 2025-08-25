import { View, type ViewProps } from "react-native";
import type { ParkingStatus } from "@shared/types/parking-status";
import { Text } from "@shared/ui/atoms";
import { TagVariant } from "./variants";

// Tag 컴포넌트에 대한 Props 타입 정의
// status: Tag의 상태(여유, 혼잡, 만차)
interface Props extends Omit<ViewProps, "children"> {
  status: ParkingStatus;
}

// status에 따라 배경색과 텍스트 색상을 적용
export default function Tag({ status = "available", ...rest }: Props) {
  const { label, background, text } = TagVariant[status];

  return (
    <View className={`items-center justify-center rounded-full px-3 py-1 ${background}`} {...rest}>
      <Text className={text} typography="caption-xl">
        {label}
      </Text>
    </View>
  );
}
