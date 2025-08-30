import clsx from "clsx";
import { View } from "react-native";
import { Icon, Text } from "@shared/ui/atoms";
import { IconName } from "@shared/ui/atoms/icon/variant";

export interface Props {
  leadingIcon?: IconName;
  title: string;
}
// 환경 설정 > 네비게이션 설정을 누를 시 나오는 바텀 시트에서 네비게이션을 설정하기 위한 리스트 아이템입니다.
export default function SelectableListItem({ leadingIcon, title }: Props) {
  return (
    <View className={clsx("flex-row justify-between")}>
      <View className="flex-1 flex-row items-center gap-3">
        {leadingIcon && <Icon name={leadingIcon} className="w-8 text-neutral-1000" />}
        <Text typography="body-lg" className="text-neutral-1000">
          {title}
        </Text>
      </View>
    </View>
  );
}
