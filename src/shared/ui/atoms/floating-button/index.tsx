import { PressableProps } from "react-native";
import { elevation } from "@/shared/tokens";
import Button from "@shared/ui/atoms/button";
import { IconName } from "../icon/variants";

interface Props extends PressableProps {
  iconName: IconName;
  disabled?: boolean;
  selected: boolean;
}

/**
 * Atom / Floating Action Button (FAB)
 *
 * Z축 최상단에 고정되어 노출되는 Atom 단위의 FAB 컴포넌트입니다. 비즈니스 로직은 포함하지 않으며, Atom / Button 컴포넌트를 기반으로 구현되었습니다.
 *
 * @param props.iconName   FAB 버튼에 표시랄 아이콘 이름
 * @param props.disabled   FAB 버튼 비활성화 여부 (기본값: false)
 * @param props.selected   FAB 버튼 선택 상태 여부 (기본값: false)
 *
 * @example
 * // 1) 기본 FAB (아이콘만 표시, 비활성화 X)
 * <FloatingButton iconName="arrowBottom" />
 *
 * // 2) 선택된 상태의 FAB (토글되는 경우)
 * <FloatingButton iconName="star" selected />
 *
 * // 3) 비활성화된 FAB (클릭 불가 상태)
 * <FloatingButton iconName="plus" disabled />
 *
 * @returns ReactElement 버튼 요소
 */
export default function FloatingButton({ iconName = "example", disabled = false, selected = false, onPress }: Props) {
  return (
    <Button
      content={{ variant: "icon", content: { iconName, accessibilityLabel: "" } }}
      disabled={disabled}
      fullWidth={false}
      roundFull={true}
      containerClassName="aspect-square pl-3 pr-3"
      defaultEffect={elevation.active}
      paletteOverride={
        !selected
          ? {
              bgIdle: "bg-neutral-100",
              bgPressed: "bg-neutral-300",
              iconIdle: "text-neutral-850",
              iconPressed: "text-neutral-900",
            }
          : {
              bgIdle: "bg-neutral-100",
              bgPressed: "bg-blue-200",
              iconIdle: "text-blue-300",
              iconPressed: "text-blue-400",
            }
      }
      onPress={onPress}
    />
  );
}
