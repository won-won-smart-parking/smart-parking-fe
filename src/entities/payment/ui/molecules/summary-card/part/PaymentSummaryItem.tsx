import { View } from "react-native";
import { Icon, Text } from "@shared/ui/atoms";

interface Props {
  ticketType: "daily" | "regular";
  total?: number;
}

export default function PaymentSummaryItem({ ticketType, total = 0 }: Props) {
  return (
    <View>
      <View className="bg-overlay-blue-20">
        <Icon className="w-8 text-neutral-100" name={ticketType === "daily" ? "ticketSaleBroken" : "ticketStar"} />
      </View>

      <View>
        <Text>{ticketType === "daily" ? "일일권" : "정기권"}</Text>
        <Text>
          {total}
          {ticketType === "daily" ? "회 이용" : "건 발급"}
        </Text>
      </View>
    </View>
  );
}
