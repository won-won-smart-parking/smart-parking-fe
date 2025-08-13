import { View, ViewProps } from "react-native";
import { DotStatus, DotVariant } from "./variants";

interface DotProps extends Omit<ViewProps, "children"> {
  status: DotStatus;
}

export default function Dot({ status, ...rest }: DotProps) {
  const background = DotVariant[status];

  return <View className={`h-1 w-1 rounded-full ${background}`} {...rest} />;
}
