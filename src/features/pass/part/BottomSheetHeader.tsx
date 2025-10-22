import { View } from "react-native";
import { Text } from "@shared/ui/atoms";

interface Props {
  title: string;
}

// BottomSheet 헤더(Header) 컴포넌트
export default function BottomSheetHeader({ title }: Props) {
  return (
    <View className="items-center gap-6">
      <Text typography="heading-md">{title}</Text>

      <View className="w-full px-5">
        <View className="border border-neutral-400" />
      </View>
    </View>
  );
}
