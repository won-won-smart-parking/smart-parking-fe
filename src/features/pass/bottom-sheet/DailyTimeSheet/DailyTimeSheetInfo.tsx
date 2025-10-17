import DailyTimeSheetInfoContent from "@features/pass/contents/DailyTimeSheetInfoContent";
import { useDailyTimeSheetConfig } from "@features/pass/hooks/useBottomSheetConfig";
import BottomSheetHeader from "@features/pass/part/BottomSheetHeader";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { Button } from "@shared/ui/atoms";

interface Props {
  infoSheetRef: React.RefObject<BottomSheetModal | null>;
}

/** 일일권 입차 예정 안내 바텀 시트 컴포넌트 */
export default function DailyTimeSheetInfo({ infoSheetRef }: Props) {
  const { renderBackDrop } = useDailyTimeSheetConfig(); // DailyTimeSheet의 Props 구성 중 renderBackDrop만 전달받는다.

  return (
    <BottomSheetModal ref={infoSheetRef} backdropComponent={renderBackDrop}>
      <BottomSheetView className="gap-4 p-6">
        <BottomSheetHeader title="입차 예정 시간 안내" />
        <DailyTimeSheetInfoContent />
        <Button
          variant="label"
          label="닫기"
          palette={{
            bgColor: "bg-blue-300",
            bgPressedColor: "bg-coolgray-300",
            textColor: "text-neutral-100",
            textPressedColor: "text-coolgray-500",
          }}
          onPress={() => infoSheetRef.current?.close()}
        />
      </BottomSheetView>
    </BottomSheetModal>
  );
}
