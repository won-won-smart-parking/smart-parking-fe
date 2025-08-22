import {
  ExtendedFloatingButton,
  type ExtendedFloatingButtonProps,
  IconFloatingButton,
  type IconFloatingButtonProps,
} from "./variant";

type Props = ({ variant: "icon" } & IconFloatingButtonProps) | ({ variant: "extended" } & ExtendedFloatingButtonProps);

/**
 * Atom / Floating Action Button (FAB)
 *
 * Z축 최상단에 고정되어 노출되는 Atom 단위의 FAB 컴포넌트입니다. 비즈니스 로직은 포함하지 않으며, Atom / Button 컴포넌트를 기반으로 구현되었습니다.
 *
 * @param props.variant  렌더링할 FAB의 종류 ("label" | "extended")
 * @param props.rest     각 variant에 따라 요구되는 FAB Props)
 *
 * @example
 * // 1) FloatingButton - Icon Variant
 * <FloatingButton variant="label" label="label" />
 *
 * // 2) FloatingButton - Extended Variant
 * <FloatingButton variant="extended" label="label" iconName="example" />
 *
 * @returns ReactElement 버튼 요소
 */
export default function FloatingButton({ variant, ...rest }: Props) {
  switch (variant) {
    case "icon":
      return <IconFloatingButton {...(rest as IconFloatingButtonProps)} />;
    case "extended":
      return <ExtendedFloatingButton {...(rest as ExtendedFloatingButtonProps)} />;
  }
}
