import clsx from "clsx";
import { View } from "react-native";
import Dot from "@entities/ui/atoms/dot";
import { ParkingStatus } from "@shared/types/parking-status";
import Icon from "@shared/ui/atoms/icon";
import Text from "@shared/ui/atoms/text";

interface Props {
  ticketPrice: string;
  active: boolean;
  state: ParkingStatus;
}

export default function Marker({ ticketPrice, active, state }: Props) {
  return (
    <View
      className={clsx(
        "flex-row items-center gap-1 rounded-full border px-2 py-1",
        active ? "border-blue-300 bg-blue-300" : "border-overlay-black-08 bg-neutral-100",
      )}
    >
      <Dot status={state} />
      <Icon name="parking" className={clsx("h-4 w-4", active ? "text-neutral-100" : "text-blue-300")} />
      <Text typography="description-md" className={clsx(active ? "text-neutral-100" : "text-neutral-1000")}>
        {ticketPrice}
      </Text>
    </View>
  );
}
