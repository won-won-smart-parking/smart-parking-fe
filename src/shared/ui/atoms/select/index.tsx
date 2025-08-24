import { Pressable, View } from "react-native";
import Icon from "@/shared/ui/atoms/icon";
import Text from "@shared/ui/atoms/text";

interface Props {
  label: string;
  value?: string;
  onPress?: () => void;
}

export default function Select({ label, value, onPress }: Props) {
  const selected = !!value;

  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => {
        // 배경색
        const bgColor = selected && pressed ? "bg-neutral-300" : !selected && pressed ? "bg-neutral-200" : "";

        // 텍스트 색상
        const textColor = selected ? "text-neutral-950" : "text-neutral-800";

        return (
          <View className={`w-auto flex-row items-center justify-center ${bgColor}`}>
            <Text typography={selected ? "caption-xxl" : "caption-tight"} className={textColor}>
              {value || label}
            </Text>
            <Icon name="arrowBottomFill" className="text-neutral-950" />
          </View>
        );
      }}
    </Pressable>
  );
}
