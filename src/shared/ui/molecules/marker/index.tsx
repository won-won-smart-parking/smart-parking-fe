import clsx from "clsx";
import { View } from "react-native";
import Dot from "@entities/ui/atoms/dot";
import { ParkingStatus } from "@shared/types/parking-status";
import { Icon, Text } from "@shared/ui/atoms";

interface Props {
  ticketPrice: string;
  selected: boolean;
  state: ParkingStatus;
}

export default function Marker({ ticketPrice, selected, state }: Props) {
  return (
    <View className="items-center">
      {/* 마커 정보 표시 부분 */}
      <View
        className={clsx(
          "relative flex-row items-center gap-1 rounded-full border px-2 py-1",
          selected ? "border-blue-300 bg-blue-300" : "border-overlay-black-08 bg-neutral-100",
        )}
      >
        {/* 주차 상태 Dot */}
        <View className="absolute -top-0.5 right-3">
          <Dot status={state} />
        </View>
        {/* 아이콘 */}
        <Icon name="parking" className={clsx("w-4", selected ? "text-neutral-100" : "text-blue-300")} />

        {/* 가격 */}
        <Text typography="description-md" className={clsx(selected ? "text-neutral-100" : "text-neutral-1000")}>
          {ticketPrice}
        </Text>
      </View>
      {/* 마커 그림자 부분 */}
      <View
        className="h-8 w-8 rounded-full bg-overlay-black-08"
        style={[
          {
            transform: [{ rotateX: "70deg" }],
          },
        ]}
      />
    </View>
  );
}
