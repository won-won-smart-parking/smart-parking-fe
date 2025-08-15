import { View, ViewProps } from "react-native";

interface Props extends Omit<ViewProps, "children"> {
  status: DotStatus;
}

export default function Dot({ status, ...rest }: Props) {
  const background = DotVariant[status];

  return <View className={`h-1 w-1 rounded-full ${background}`} {...rest} />;
}

export const DotVariant = {
  available: "bg-green-200",
  busy: "bg-orange-200",
  full: "bg-red-200",
};
export type DotStatus = keyof typeof DotVariant;
