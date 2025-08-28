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
