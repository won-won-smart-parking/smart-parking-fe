import clsx from "clsx";
import { View, ViewProps } from "react-native";

interface Props extends Required<Pick<ViewProps, "children">> {
  direction: "column" | "row";
}

export default function ButtonGroup({ direction, children }: Props) {
  return <View className={clsx("", direction === "row" ? "flex-row" : "flex-col")}>{children}</View>;
}
