import { Pressable, PressableProps } from "react-native";
import { Checkbox, Text } from "@shared/ui/atoms";

interface Props extends Required<Pick<PressableProps, "onPress">> {
  label: string;
  selected: boolean;
}

export default function AgreementItem({ label, selected, onPress }: Props) {
  return (
    <Pressable className="flex-row items-center gap-3" onPress={onPress}>
      {() => (
        <>
          <Checkbox selected={selected} />
          <Text typography="description-md">{label}</Text>
        </>
      )}
    </Pressable>
  );
}

// { pressed }
