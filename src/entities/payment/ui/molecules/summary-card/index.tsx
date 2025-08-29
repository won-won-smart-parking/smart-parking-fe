import { View } from "react-native";
import PaymentSummaryItem from "./part/PaymentSummaryItem";

/**
 * Molecular / Summary Card
 *
 * 마이프로필 도메인에서 사용자가 이용한 일일권 / 정기권 이용 내역 총 개수를 요약해서 보여주는 시각적인 UI 컴포넌트입니다.
 * - (2025.08.29 기준) 현재는 스켈레톤 구조만 구성하였으며, 향후 비즈니스 로직에 맞게 컴포넌트 속성 재구성 및 일부 스타일 수정이 있을 수도 있습니다.
 */
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
