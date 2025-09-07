import clsx from "clsx";
import { View } from "react-native";
import { elevation } from "@shared/tokens";

interface Props {
  selected?: boolean;
  pressed: boolean;
}

/**
 * Atom / Radio
 *
 * Radio Item 내부에서 사용되는 순수 시각적 컴포넌트입니다.
 * 선택 여부에 따라 스타일만 변경되며, 비즈니스 로직이나 접근성 역할은 포함하지 않습니다.
 *
 * @param props.selected  선택 상태를 나타내는 값 (기본값: false)
 * @param props.pressed   누름 상태를 나타내는 값
 *
 * @example
 * // 선택된 상태
 * <Radio selected={true} />
 *
 * // 선택되지 않은 상태
 * <Radio selected={false} />
 *
 * @returns ReactElement Radio Component
 */
export default function Radio({ selected = false, pressed }: Props) {
  return (
    <View
      className={clsx(
        "aspect-square w-7 items-center justify-center overflow-hidden rounded-full",
        selected ? (pressed ? "bg-neutral-900" : "bg-neutral-1000") : pressed ? "bg-neutral-850" : "bg-neutral-700",
      )}
      style={pressed && elevation.active}
    >
      <View className={clsx("h-3 w-3 rounded-full", pressed ? "bg-neutral-200" : "bg-neutral-100")} />
    </View>
  );
}
