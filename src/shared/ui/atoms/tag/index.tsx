import { View, ViewProps } from "react-native";
import Text from "@/shared/tokens/typography/Text";
import { TagStatus, TagVariant } from "./variants";

// Tag 컴포넌트에 대한 Props 타입 정의
// status: Tag의 상태(여유, 혼잡, 만차)
interface Props extends Omit<ViewProps, "children"> {
  status: TagStatus;
}

// Tag 컴포넌트
// status에 따라 배경색과 텍스트 색상을 적용
export default function Tag({ status, ...rest }: Props) {
  const { label, background, text } = TagVariant[status];

  return (
    <View className={`items-center justify-center rounded-full px-3 py-1 ${background}`} {...rest}>
      <Text className={text} variant="caption-xl">
        {label}
      </Text>
    </View>
  );
}
