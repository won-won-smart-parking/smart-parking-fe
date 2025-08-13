import { View, ViewProps } from "react-native";

interface Props extends Omit<ViewProps, "children"> {
  status: "available" | "busy" | "full";
}

export default function Dot({ status, ...rest }: Props) {
  let background = "";

  switch (status) {
    case "available":
      background = "bg-green-200";
      break;
    case "busy":
      background = "bg-orange-200";
      break;
    case "full":
      background = "bg-red-200";
      break;
  }

  return <View className={`h-1 w-1 rounded-full ${background}`} {...rest} />;
}