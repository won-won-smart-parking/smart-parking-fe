import { Pressable, PressableProps } from "react-native";
import { Checkbox, Text } from "@shared/ui/atoms";

interface Props extends Required<Pick<PressableProps, "onPress">> {
  label: string;
  selected: boolean;
}

export default function AgreementItem({ label, selected, onPress }: Props) {
  return (
    <Pressable className="flex-row items-center gap-3" onPress={onPress}>
      {({ pressed }) => (
        <>
          <Checkbox selected={selected} pressed={pressed} />
          <Text typography="description-md">{label}</Text>
        </>
      )}
    </Pressable>
  );
}

/**
 * [ NOTE ]
 * - AgreementItem은 항상 눌림(Press) 동작을 가지므로, 내부 Checkbox에도 pressed 효과가 무조건 발생합니다.
 * - 길게 누를 때는 자연스럽지만, 짧게 눌렀을 때는 pressed 효과가 순간적으로 나타나 부자연스럽게 보일 수 있습니다.
 * - 따라서 Checkbox의 pressed 효과를 제거할지 여부를 검토할 필요가 있습니다.
 * - 만약 이를 유지하려면 Pressable 내부에서 제공하는 표현식이 아닌 state + Pressable에서 제공하는 onLongPrss, onPressout 조합으로 수정하면 되긴 합니다.
 *
 * ```tsx
 * const [pressed, setPressed] = useState(false);
 *
 * <Pressable
 *  onLongPress={() => setPressed(true)} // 500ms 기준으로 실행되는 이벤트 리스너
 *  onPressOut={() => setPressed(false)}
 * >
 *```

 * 이와 같이 수정만 하면 됩니다.
 */
