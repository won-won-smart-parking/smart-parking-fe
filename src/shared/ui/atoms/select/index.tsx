import { View } from "react-native";
import Icon from "@/shared/ui/atoms/icon";
import Text from "@/shared/ui/atoms/text";

export type SelectLabel = "시간설정" | "날짜설정";

interface Props {
  label: SelectLabel;
}

export default function Select({ label }: Props) {
  return (
    <View className="flex-row items-center justify-center">
      <Text typography="caption-tight" className="text-neutral-800">
        {label}
      </Text>
      <Icon name="arrowBottomFill" className="text-neutral-950" />
    </View>
  );
}
