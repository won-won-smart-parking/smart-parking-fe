import clsx from "clsx";
import { View } from "react-native";
import { Icon, Text } from "@shared/ui/atoms";
import { IconName } from "@shared/ui/atoms/icon/variant";

export interface Props {
  leadingIcon: IconName;
  title: string;
  trailingIcon?: IconName;
  emphasis?: boolean;
}

// 라우트 이동 동작을 지원하는 네비게이션 리스트 아이템 컴포넌트입니다.
export default function NavigationListItem({ leadingIcon, title, trailingIcon, emphasis = false }: Props) {
  return (
    <View className={clsx("flex-row justify-between")}>
      <View className="flex-1 flex-row items-center gap-3">
        <Icon name={leadingIcon} className={clsx(emphasis ? "text-red-300" : "text-neutral-1000")} />
        <Text typography="body-lg" className={clsx(emphasis ? "text-red-300" : "text-neutral-1000")}>
          {title}
        </Text>
      </View>

      {/* 아이콘 조건부 렌더링 */}
      {trailingIcon && <Icon name={trailingIcon} />}
    </View>
  );
}
