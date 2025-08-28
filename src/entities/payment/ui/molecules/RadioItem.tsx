import { Pressable, PressableProps, View } from "react-native";
import { Icon, Radio, Text } from "@shared/ui/atoms";
import { IconName } from "@shared/ui/atoms/icon/variant";

interface Props extends Required<Pick<PressableProps, "onPress">> {
  label: string;
  iconName: IconName;
}

export default function RadioItem({ label, iconName, onPress }: Props) {
  return (
    <Pressable className="flex-row gap-3" onPress={onPress}>
      {({ pressed }) => (
        <>
          <Radio pressed={pressed} />
          <View className="flex-row items-center gap-2">
            <Icon name={iconName} />
            <Text typography="description-md">{label}</Text>
          </View>
        </>
      )}
    </Pressable>
  );
}
