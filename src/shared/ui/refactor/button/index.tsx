import {
  BothButton,
  type BothButtonProps,
  IconButton,
  type IconButtonProps,
  LabelButton,
  type LabelButtonProps,
} from "./variant";

type Props =
  | ({ variant: "both" } & BothButtonProps)
  | ({ variant: "icon" } & IconButtonProps)
  | ({ variant: "label" } & LabelButtonProps);

export default function Button({ variant, ...rest }: Props) {
  switch (variant) {
    case "label":
      return <LabelButton {...(rest as LabelButtonProps)} />;
    case "icon":
      return <IconButton {...(rest as IconButtonProps)} />;
    case "both":
      return <BothButton {...(rest as BothButtonProps)} />;
  }
}
