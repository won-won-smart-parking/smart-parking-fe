import { PressableProps } from "react-native";
import Button from "@shared/ui/atoms/button";
import { ButtonVariant } from "@shared/ui/atoms/button/foundation";
import { chipPalettePreset } from "./palette-preset";

interface Props extends PressableProps {
  content: ButtonVariant;
  border?: boolean;
  selected?: boolean;
}

/**
 * Atom / Chip
 *
 * 필터링에 사용되는 버튼의 공통 UI 스타일과 접근성 속성을 정의한 Atom / Chip 컴포넌트입니다.
 * 비즈니스 로직은 포함하지 않으며 Atom / Button 컴포넌트를 기반으로 구현되었습니다.
 *
 * @param props.content   버튼 콘텐츠 변형 / 페이로드( label | icon | both 의 짝을 강제)
 * @param props.border    테두리 표시 여부(기본: false)
 * @param props.selected  버튼 선택 여부(기본: false)
 * @param props.onPress   Chip 버튼의 동작을 처리하는 콜백 함수
 *
 * @example
 * // 1) variant = text-only
 * <Chip content={{ variant: "label", content: { text: "label", accessibilityLabel: "" } }} />
 *
 * // 2) variant = icon-only
 * <Chip content={{ variant: "icon", content: { iconName: "example", accessibilityLabel: "" } }} />
 *
 * // 3) variant = both
 * <Chip content={{ variant: "both", content: { text: "label", iconName: "example", accessibilityLabel: "" } }} />
 *
 * // 4) border=false / variant = both
 * <Chip
 *  content={{ variant: "both", content: { text: "label", iconName: "example", accessibilityLabel: "" } }}
 *  border={false}
 * />
 *
 * @returns ReactElement 버튼 요소
 */
export default function Chip({ content, border = true, selected = false, onPress }: Props) {
  const palettePreset = chipPalettePreset(content.variant, border, selected);

  return (
    <Button
      category="chip"
      content={content}
      fullWidth={false}
      roundFull={true}
      border={border}
      iconSize="w-5"
      containerClassName="pl-3 pr-3"
      typography="description-md"
      paletteOverride={palettePreset}
      a11ySelected={selected}
      onPress={onPress}
      disablePressedEffect
    />
  );
}
