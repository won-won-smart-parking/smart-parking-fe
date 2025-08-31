import {
  LabelFilterGroup,
  LabelFilterGroupProps,
  ScrollFilterGroup,
  ScrollFilterGroupProps,
  SortFilterGroup,
  SortFilterGroupProps,
} from "./variant";

type Props =
  | ({ variant: "label" } & LabelFilterGroupProps)
  | ({ variant: "scroll" } & ScrollFilterGroupProps)
  | ({ variant: "sort" } & SortFilterGroupProps);

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
/**
 * Molecular / Filter Group
 *
 * Atom / Chip 컴포넌트를 구성하는 Filter Group 레이아웃 입니다.
 * 비즈니스 로직은 포함하지 않으며, 각 그룹에 사용되는 스타일과 코어 컴포넌트가 다르기 때문에 기본(Base)를 구축하지 않고, 각각 단일 책임을 할 수 있게 구성되었습니다.
 *
 * @param props.variant  렌더링할 Filter Group의 종류 ("label" | "scroll" | "sort")
 * @param props.rest     각 variant에 따라 요구되는 Filter Group Props
 *
 * @example
 * // 1) variant = label
 * <FilterGroup variant="label" title="제목">
 *  <Chip ... />
 *  <Chip ... />
 *  <Chip ... />
 * </FilterGroup>
 *
 * // 2) variant = scroll
 * <FilterGroup variant="scroll">
 *  <Chip ... />
 *  <Chip ... />
 *  <Chip ... />
 * </FilterGroup>
 *
 * // 3) variant = sort
 * <FilterGroup variant="sort">
 *  <Chip ... />
 *  <Chip ... />
 *  <Chip ... />
 * </FilterGroup>
 *
 * @returns ReactElement 선택된 variant에 해당하는 FilterGroup 컴포넌트
 */
export default function FilterGroup({ variant, ...rest }: Props) {
  switch (variant) {
    case "label": {
      return <LabelFilterGroup {...(rest as LabelFilterGroupProps)} />;
    }
    case "scroll": {
      return <ScrollFilterGroup {...(rest as ScrollFilterGroupProps)} />;
    }
    case "sort": {
      return <SortFilterGroup {...(rest as SortFilterGroupProps)} />;
    }
  }
}
