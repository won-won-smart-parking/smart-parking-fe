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

/**
 * [NOTE]
 * - 비즈니스 로직 설계 후 Props 수정
 * - 라우트 구성 모두 설계 후 useRouter 또는 Link 컴포넌트 수정 후 라우트 이동 설계
 */
