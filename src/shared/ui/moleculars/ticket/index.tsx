import clsx from "clsx";
import { View } from "react-native";
import { elevation } from "@shared/tokens";
import { Icon } from "@shared/ui/atoms";
import TicketText from "./ticket-text";

interface Props {
  ticketLabel: string;
  ticketInfo: string;
  ticketPrice: string;
  active?: boolean;
}

const activeStyle = {
  container: "bg-neutral-100 border-l-[8px] border-blue-300",
  iconBg: "bg-blue-300",
  text: "text-neutral-1000",
};

const inactiveStyle = {
  container: "bg-neutral-400 border-l-[8px] border-neutral-700",
  iconBg: "bg-neutral-870",
  text: "text-neutral-850",
};

export default function Ticket({ ticketLabel, ticketInfo, ticketPrice, active = true }: Props) {
  const style = active ? activeStyle : inactiveStyle;

  return (
    <View className={clsx("item-center gap-2 rounded pb-3 pl-6 pr-4 pt-3", style.container)} style={elevation.resting}>
      <View className="flex-row items-center gap-2">
        <View className={clsx("h-5 w-5 items-center justify-center rounded-sm", style.iconBg)}>
          <Icon name="parking" className={clsx("w-4", active ? "text-neutral-100" : "text-neutral-500")} />
        </View>
        <TicketText typography="label-lg" text={ticketLabel} className={style.text} />
      </View>

      <View className="flex-row justify-between">
        <TicketText typography="caption-tight" text={ticketInfo} className={style.text} />
        <TicketText typography="caption-xxl" text={ticketPrice} className={style.text} />
      </View>
    </View>
  );
}
