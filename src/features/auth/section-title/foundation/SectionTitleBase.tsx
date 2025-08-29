import { useRouter } from "expo-router";
import { Pressable, View } from "react-native";
import { Text } from "@shared/ui/atoms";

export interface Props {
  title: string;
  label: string;
}

// Section Title UI만 담당하는 컴포넌트 레이아웃 구조
export default function SectionTitleBase({ title, label }: Props) {
  const router = useRouter();

  return (
    <View className="flex-row items-center justify-between px-6 py-4">
      <Text typography="heading-md">{title}</Text>

      {label && (
        <Pressable onPress={() => router.back()}>
          <Text typography="label-tight" className="text-neutral-900">
            {label}
          </Text>
        </Pressable>
      )}
    </View>
  );
}
