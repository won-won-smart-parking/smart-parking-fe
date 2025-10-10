import clsx from "clsx";
import { TouchableOpacity, View } from "react-native";
import { Icon, Text } from "@shared/ui/atoms";
import { IconName } from "@shared/ui/atoms/icon/variant";

export interface Props {
  title: string;
  direction?: "top" | "center"; // 리터럴 타입 유니온으로 구성
  description?: string;
  iconName?: IconName;
  onPress?: () => void;
}

// 기본 리스트 아이템 컴포넌트입니다.
export default function DefaultListItem({ title, description, iconName, direction = "center", onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View
        className={clsx(
          "flex-row justify-between border-b border-neutral-400 py-3",
          direction === "center" ? "items-center" : "items-start", // 아이콘 정렬을 위한 수직 축에 대한 props를 전달받아 조건부 스타일을 적용합니다.
        )}
      >
        {/* 리스트의 제목 + 설명을 구성하는 레이아웃 */}
        <View className="flex-1 gap-1">
          <Text typography="description-md">{title}</Text>
          {description && ( // description은 string \ undefined이기 때문에 값이 없을 경우 출력되지 않는다.
            <Text typography="caption-sm" className="text-neutral-850">
              {description}
            </Text>
          )}
        </View>

        {/* 아이콘 조건부 렌더링 */}
        {iconName && <Icon name={iconName} className="text-neutral-850" />}
      </View>
    </TouchableOpacity>
  );
}
