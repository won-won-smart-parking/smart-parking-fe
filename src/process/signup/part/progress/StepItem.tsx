import clsx from "clsx";
import { View } from "react-native";
import { Text } from "@shared/ui/atoms";
import { StepCircle, StepStatus } from "./StepCircle";

export interface Props {
  status: StepStatus;
  label: string;
  isFirst?: boolean;
  isLast?: boolean;
}

export default function StepItem({ status, label, isFirst, isLast }: Props) {
  return (
    <View className="flex-1">
      <View className="items-center gap-6">
        <View className="flex-row items-center">
          <View className={clsx("h-1.5 flex-1", status === "inactive" ? "bg-coolgray-300" : "bg-blue-300", isFirst && "opacity-0")} />
          <StepCircle status={status} />
          <View className={clsx("h-1.5 flex-1", status === "completed" ? "bg-blue-300" : "bg-coolgray-300", isLast && "opacity-0")} />
        </View>

        <Text className={clsx(status === "inactive" ? "text-coolgray-500" : "text-neutral-1000")}>{label}</Text>
      </View>
    </View>
  );
}
