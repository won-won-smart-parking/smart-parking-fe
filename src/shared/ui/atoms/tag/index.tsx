import { View, ViewProps } from "react-native";
import Text from "@/shared/tokens/typography/Text";
import { TagStatus, TagVariant } from "./variants";

/**
 * Tag 컴포넌트 Props
 *
 * - ViewProps에서 children 속성을 제외하고 확장
 * - status: Tag의 상태(available | busy | full)를 지정
 */

interface TagProps extends Omit<ViewProps, "children"> {
  status: TagStatus;
}

/**
 * Tag
 *
 * - 주차장 상태에 따라 라벨과 스타일을 렌더링하는 컴포넌트
 * - 상태별 스타일과 라벨 데이터는 variants.ts에서 관리
 * - 스타일/라벨 변경 시 Tag 컴포넌트 수정 없이 variants.ts만 변경 가능
 */

export default function Tag({ status, ...rest }: TagProps) {
  const { label, background, text } = TagVariant[status];

  return (
    <View className={`items-center justify-center rounded-full px-3 py-1 ${background}`} {...rest}>
      <Text className={text} variant="caption-xl">
        {label}
      </Text>
    </View>
  );
}
