import { Pressable, PressableProps } from "react-native";
import { Checkbox, Text } from "@shared/ui/atoms";

interface Props extends Required<Pick<PressableProps, "onPress">> {
  description: string;
  selected: boolean;
}

/**
 * Molecular / Agreement Item
 *
 * Atom / Checkbox + Text를 조합하여 만든 동의 항목 리스트 아이템 컴포넌트입니다. 비즈니스 로직은 포함하지 않습니다.
 *
 * @param props.description  동의 항목에 대한 설명 문구
 * @param props.selected     해당 동의 항목이 선택되었는지 여부
 * @param props.onPress      동의 항목을 눌렀을 때 호출되는 이벤트 핸들러
 *
 * @example
 * <Pressable
 *  description={"description >"}
 *  selected={selectedState}
 *  onPress={() => ...}
 * />
 *
 * @returns ReactElement Molecular / Agreement Item
 */
export default function AgreementItem({ description, selected, onPress }: Props) {
  return (
    <Pressable className="flex-row items-center gap-3" onPress={onPress}>
      {({ pressed }) => (
        <>
          <Checkbox selected={selected} pressed={pressed} />
          <Text typography="description-md">{description}</Text>
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
