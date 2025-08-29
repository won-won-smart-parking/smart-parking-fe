import { View } from "react-native";
import PaymentSummaryItem from "./part/PaymentSummaryItem";

export default function PaymentSummaryCard() {
  return (
    <View className="rounded-[8px] bg-blue-300 px-4 py-5">
      <View className="flex-row justify-center gap-6">
        {/* 일일권 이용내역 요약 개수 */}
        <PaymentSummaryItem ticketType="daily" />

        <View className="w-[1px] bg-overlay-white-30" />

        {/* 정기권 이용내역 요약 개수 */}
        <PaymentSummaryItem ticketType="regular" />
      </View>
    </View>
  );
}
