// import { PressableProps } from "react-native";
// import Button from "@shared/ui/atoms/button";
// import { ButtonVariant } from "@shared/ui/atoms/button/foundation";
// import { chipPalettePreset } from "./palette-preset";
import { BothChip, type BothChipProps, IconChip, type IconChipProps, LabelChip, type LabelChipProps } from "./variant";

type Props =
  | ({ variant: "label" } & LabelChipProps)
  | ({ variant: "icon" } & IconChipProps)
  | ({ variant: "both" } & BothChipProps);

/**
 * Atom / Chip
 *
 * 필터링에 사용되는 버튼의 공통 UI 스타일과 접근성 속성을 정의한 Atom / Chip 컴포넌트입니다.
 * 비즈니스 로직은 포함하지 않으며 Atom / Button 컴포넌트를 기반으로 구현되었습니다.
 *
 * @param props.variant  렌더링할 Chip의 종류 ("label" | "icon" | "both")
 * @param props.rest     각 variant에 따라 요구되는 Chip Props
 *
 * @example
 * // 1) variant = label
 * <Chip variant="label" label={label} onPress={onPress} />
 *
 * // 2) variant = icon
 * <Chip variant="icon" iconName="example" onPress={onPress} />
 *
 * // 3) variant = both
 * <Chip variant="both" label={label} iconName="example" onPress={onPress} />
 *
 * @returns ReactElement 선택된 variant에 해당하는 Chip 컴포넌트
 */
export default function Chip({ variant, ...rest }: Props) {
  switch (variant) {
    case "label":
      return <LabelChip {...(rest as LabelChipProps)} />;
    case "icon":
      return <IconChip {...(rest as IconChipProps)} />;
    case "both":
      return <BothChip {...(rest as BothChipProps)} />;
  }
}
