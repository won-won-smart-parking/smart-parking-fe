import { Pressable, PressableProps, View } from "react-native";
import Icon from "@shared/ui/atoms/icon";
import Text from "@shared/ui/atoms/text";

interface Props extends Required<Pick<PressableProps, "onPress">> {
  placeholder: string;
  value?: string;
}

export default function Select({ placeholder, value, onPress }: Props) {
  // value가 존재하면 selected인 상태
  const selected = !!value;

  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => {
        // 배경색
        // 선택된 상태에서 press: bg-neutral-300
        // 선택 안된 상태에서 press: bg-neutral-200
        // 그 외: 배경 없음
        const bgColor = selected && pressed ? "bg-neutral-300" : !selected && pressed ? "bg-neutral-200" : "";

        // 텍스트 색상
        // 선택된 상태: text-neutral-950
        // 선택 안된 상태: text-neutral-800
        const textColor = selected ? "text-neutral-950" : "text-neutral-800";

        return (
          // w-auto -> 내용에 맞는 너비
          <View className={`w-auto flex-row items-center justify-center gap-1 ${bgColor}`}>
            <Text typography={selected ? "caption-xxl" : "caption-tight"} className={textColor}>
              {value || placeholder}
            </Text>
            <Icon name="arrowBottomFill" className="text-neutral-950" />
          </View>
        );
      }}
    </Pressable>
  );
}
