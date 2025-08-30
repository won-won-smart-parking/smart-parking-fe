import clsx from "clsx";
import { View } from "react-native";
import { Icon, Text } from "@shared/ui/atoms";
import { IconName } from "@shared/ui/atoms/icon/variant";

export interface Props {
  leadingIcon?: IconName;
  title: string;
  value: string;
  valueState?: "default" | "critical" | "info";
}

// 환경 설정 페이지에서 사용되는 '네비게이션 설정 여부' or "현재 버전"을 값을 나타내는 리스트 아이템 컴포넌트입니다.
export default function ValueListItem({ leadingIcon, title, value, valueState = "default" }: Props) {
  return (
    <View className={"flex-row justify-between"}>
      <View className="flex-1 flex-row items-center gap-3">
        {leadingIcon && <Icon name={leadingIcon} className="text-neutral-1000" />}
        <Text typography="body-lg">{title}</Text>
      </View>

      <Text
        typography="caption-tight"
        className={clsx(
          valueState === "default" && "text-neutral-1000",
          valueState === "info" && "text-blue-300",
          valueState === "critical" && "text-red-300",
        )}
      >
        {value}
      </Text>
    </View>
  );
}
