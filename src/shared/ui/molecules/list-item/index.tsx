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
