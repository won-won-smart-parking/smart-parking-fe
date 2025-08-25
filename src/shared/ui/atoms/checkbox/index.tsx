import clsx from "clsx";
import { Pressable, PressableProps, View } from "react-native";
import { elevation } from "@shared/tokens";
import { Icon } from "@shared/ui/atoms";

interface Props extends PressableProps {
  selected?: boolean;
}

/**
 * Atom / Checkbox
 *
 * 동의 여부(Agreement Item) 컴포넌트 내부에서 사용되는 순수 시각적 컴포넌트입니다.
 * 선택 여부에 따라 스타일만 변경되며, 비즈니스 로직이나 접근성 역할은 포함하지 않습니다.
 *
 * @param props.selected  선택 상태를 나타내는 값 (기본값: false)
 *
 * @example
 * // 선택된 상태
 * <Checkbox selected={true} />
 *
 * // 선택되지 않은 상태
 * <Checkbox selected={false} />
 *
 * @returns ReactElement Checkbox Component
 */
export default function Checkbox({ selected = false }: Props) {
  return (
    <Pressable className="aspect-square w-7 overflow-hidden rounded-[4px]">
      {({ pressed }) => {
        return (
          <View
            className={clsx(
              "flex h-full w-full items-center justify-center",
              selected ? (pressed ? "bg-blue-400" : "bg-blue-300") : pressed ? "bg-neutral-850" : "bg-neutral-700",
            )}
            style={pressed && elevation.active}
          >
            <Icon
              name="check"
              className={clsx("w-6 rounded-full", pressed ? "text-neutral-200" : "text-neutral-100")}
            />
            {/* <View  /> */}
          </View>
        );
      }}
    </Pressable>
  );
}
