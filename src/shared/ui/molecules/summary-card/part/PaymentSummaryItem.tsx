import { View } from "react-native";
import { Icon, Text } from "@shared/ui/atoms";

interface Props {
  ticketType: "daily" | "regular";
  total?: number;
}

export default function PaymentSummaryItem({ ticketType, total = 0 }: Props) {
  return (
    <View className="flex-row items-center gap-4">
      <View className="rounded-[8px] bg-overlay-blue-20 p-2">
        <Icon className="w-8 text-neutral-100" name={ticketType === "daily" ? "ticketSaleBroken" : "ticketStar"} />
      </View>

      <View className="gap-1">
        <Text typography="body-lg" className="text-neutral-100">
          {ticketType === "daily" ? "일일권" : "정기권"}
        </Text>
        <Text typography="title-md" className="text-neutral-100">
          {total}
          {ticketType === "daily" ? "회 이용" : "건 발급"}
        </Text>
      </View>
    </View>
  );
}
