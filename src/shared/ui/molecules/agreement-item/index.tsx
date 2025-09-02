import { useState } from "react";
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
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      className="flex-row items-center gap-3"
      onLongPress={() => setPressed(true)}
      onPressOut={(event) => {
        onPress?.(event); // Press Out 이벤트가 발생한 시점에 onPress 실행 + Pressed 효과 제거
        setPressed(false);
      }}
    >
      <>
        <Checkbox selected={selected} pressed={pressed} />
        <Text typography="description-md">{description}</Text>
      </>
    </Pressable>
  );
}
