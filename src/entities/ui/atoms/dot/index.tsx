import clsx from "clsx";
import { View, ViewProps } from "react-native";
import { ParkingStatus } from "@/shared/types/parking-status";

// Props 정의 : 주차장 상태(status)를 선택적으로 받음
interface Props extends ViewProps {
  status?: ParkingStatus;
}

// 상태별 백그라운드 색상 지정
const bgColor: Record<ParkingStatus, string> = {
  available: "bg-green-200",
  busy: "bg-orange-200",
  full: "bg-red-200",
};

// 주차장 상태 기본값 "available"
export default function Dot({ status = "available" }: Props) {
  return <View className={clsx(bgColor[status], "h-1", "w-1", "rounded-full")} />;
}
