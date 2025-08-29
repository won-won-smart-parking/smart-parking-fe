import clsx from "clsx";
import { View } from "react-native";
import { elevation } from "@shared/tokens";
import Icon from "@shared/ui/atoms/icon";
import Text from "@shared/ui/atoms/text";

interface Props {
  ticketLabel: string;
  ticketInfo: string;
  ticketPrice: string;
  active?: boolean;
}

export default function Ticket({ ticketLabel, ticketInfo, ticketPrice, active = true }: Props) {
  const activeStyle = {
    container: active
      ? "bg-neutral-100 border-l-[8px] border-blue-300"
      : "bg-neutral-400 border-l-[8px] border-neutral-700",
    iconBg: active ? "bg-blue-300" : "bg-neutral-870",
    text: active ? "text-neutral-1000" : "text-neutral-850",
  };

  return (
    <View
      className={clsx("item-center gap-2 rounded pb-3 pl-6 pr-4 pt-3", activeStyle.container)}
      style={elevation.resting}
    >
      <View className="flex-row items-center gap-2">
        <View className={clsx("h-5 w-5 items-center justify-center rounded-sm", activeStyle.iconBg)}>
          <Icon name="parking" className={clsx("w-4", active ? "text-neutral-100" : "text-neutral-500")} />
        </View>
        <Text typography="label-lg" className={activeStyle.text}>
          {ticketLabel}
        </Text>
      </View>
      <View className="flex-row justify-between">
        <Text typography="caption-tight" className={activeStyle.text}>
          {ticketInfo}
        </Text>
        <Text typography="caption-xxl" className={activeStyle.text}>
          {ticketPrice}
        </Text>
      </View>
    </View>
  );
}
