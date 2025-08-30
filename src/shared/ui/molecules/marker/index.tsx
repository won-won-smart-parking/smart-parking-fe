import clsx from "clsx";
import { StyleSheet, View } from "react-native";
import Dot from "@entities/ui/atoms/dot";
import { ParkingStatus } from "@shared/types/parking-status";
import { Icon } from "@shared/ui/atoms";
import Text from "@shared/ui/atoms/text";

interface Props {
  ticketPrice: string;
  active: boolean;
  state: ParkingStatus;
}

// 마커 장소 표시 부분
const Oval = () => <View style={styles.oval} />;

const styles = StyleSheet.create({
  oval: {
    width: 12,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(0,0,0,0.08)",
    transform: [{ scaleX: 2 }],
  },
});

export default function Marker({ ticketPrice, active, state }: Props) {
  return (
    <View className="items-center gap-1">
      {/* 마커 정보 표시 부분 */}
      <View
        className={clsx(
          "relative flex-row items-center gap-1 rounded-full border px-2 py-1",
          active ? "border-blue-300 bg-blue-300" : "border-overlay-black-08 bg-neutral-100",
        )}
      >
        {/* 주차 상태 Dot */}
        <View style={{ position: "absolute", left: 68, top: -30, bottom: 0, justifyContent: "center" }}>
          <Dot status={state} />
        </View>
        {/* 아이콘 */}
        <Icon name="parking" className={clsx("h-4 w-4", active ? "text-neutral-100" : "text-blue-300")} />

        {/* 가격 */}
        <Text typography="description-md" className={clsx(active ? "text-neutral-100" : "text-neutral-1000")}>
          {ticketPrice}
        </Text>
      </View>
      <Oval />
    </View>
  );
}
