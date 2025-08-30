import { View } from "react-native";
import { Switch, Text } from "@shared/ui/atoms";
import { Props as SwitchProps } from "@shared/ui/atoms/switch";

export interface Props {
  title: string;
  description: string;
  switchProps: SwitchProps;
}

// 환경 설정에서 알림 설정 등에 사용되는 스위치 리스트 아이템 컴포넌트입니다.
export default function SwitchListItem({ title, description, switchProps }: Props) {
  return (
    <View className={"flex-row items-center justify-between"}>
      <View className="flex-1 gap-1">
        <Text typography="body-lg">{title}</Text>
        <Text typography="caption-tight" className="text-neutral-850">
          {description}
        </Text>
      </View>

      <Switch {...switchProps} />
    </View>
  );
}
