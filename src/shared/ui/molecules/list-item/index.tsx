import {
  DefaultListItem,
  type DefaultListItemProps,
  NavigationListItem,
  type NavigationListItemProps,
  SelectableListItem,
  type SelectableListItemProps,
  SwitchListItem,
  type SwitchListItemProps,
  ValueListItem,
  type ValueListItemProps,
} from "./variant";

type Props =
  | ({ variant: "default" } & DefaultListItemProps)
  | ({ variant: "navigation" } & NavigationListItemProps)
  | ({ variant: "selectable" } & SelectableListItemProps)
  | ({ variant: "switch" } & SwitchListItemProps)
  | ({ variant: "value" } & ValueListItemProps);

/**
 * Molecular / List Item
 *
 * Figma로 설계한 스타일 가이드를 기반으로, Atom 단위 컴포넌트를 조합하여 만든 리스트 아이템 컴포넌트입니다.
 * 비즈니스 로직은 포함하지 않으며, 아래 다섯 가지 variant를 지원합니다.
 *
 * - default: 기본 리스트 아이템 컴포넌트입니다.
 * - navigation: 라우트 이동 동작을 지원하는 네비게이션 리스트 아이템 컴포넌트입니다.
 * - selectable: 환경 설정 > 네비게이션 설정에서 바텀 시트를 통해 네비게이션을 선택할 때 사용되는 리스트 아이템입니다.
 * - switch: 환경 설정의 알림 설정 등에서 사용되는 스위치 리스트 아이템 컴포넌트입니다.
 * - value: 환경 설정 페이지에서 '네비게이션 설정 여부' 또는 '현재 버전'과 같은 값을 표시하는 리스트 아이템 컴포넌트입니다.
 *
 * @param props.variant  렌더링할 List Item의 종류 ("default" | "navigation" | "selectable" | "switch" | "value")
 * @param props.rest     각 variant에 따라 요구되는 List Item Props
 *
 * @returns ReactElement Molecular / List Item
 */
export default function ListItem({ variant, ...rest }: Props) {
  switch (variant) {
    case "default": {
      return <DefaultListItem {...(rest as DefaultListItemProps)} />;
    }
    case "navigation": {
      return <NavigationListItem {...(rest as NavigationListItemProps)} />;
    }
    case "selectable": {
      return <SelectableListItem {...(rest as SelectableListItemProps)} />;
    }
    case "switch": {
      return <SwitchListItem {...(rest as SwitchListItemProps)} />;
    }
    case "value": {
      return <ValueListItem {...(rest as ValueListItemProps)} />;
    }
  }
}
