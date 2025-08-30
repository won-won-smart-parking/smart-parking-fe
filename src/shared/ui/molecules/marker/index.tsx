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

export default function Marker({ ticketPrice, state }: Props) {
  return (
    <View className="flex-row items-center gap-1 rounded-full border px-2 py-1">
      <Dot status={state} />
      <Icon name="parking" className="h-4 w-4 text-blue-300" />
      <Text typography="description-md" className="text-neutral-1000">
        {ticketPrice}
      </Text>
    </View>
  );
}
