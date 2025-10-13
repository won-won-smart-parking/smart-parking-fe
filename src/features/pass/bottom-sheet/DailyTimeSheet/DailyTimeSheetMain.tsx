import { Pressable, View } from "react-native";
import DailyTimeSheetMainContent from "@features/pass/contents/DailyTimeSheetMainContent";
import DailyTimeSheetFooter from "@features/pass/footer/DailyTimeSheetFooter";
import { useDailyTimeSheetConfig } from "@features/pass/hooks/useBottomSheetConfig";
import BottomSheetHeader from "@features/pass/part/BottomSheetHeader";
import BottomSheet, { BottomSheetModal } from "@gorhom/bottom-sheet";
import type { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { Icon, Text } from "@shared/ui/atoms";
import useDailyTimeSelect from "./useDailyTimeSelect";

interface Props {
  bottomSheetRef: React.RefObject<BottomSheetMethods | null>;
  infoSheetRef: React.RefObject<BottomSheetModal | null>;
  onPress: () => void;
}

/** 일일권 메인 바텀 시트 컴포넌트 */
export default function DailyTimeSheetMain({ bottomSheetRef, infoSheetRef, onPress }: Props) {
  const { renderBackDrop, ...dailyTimeSheetProps } = useDailyTimeSheetConfig(); // DailyTimeSheet의 Props 구성을 전달받는다.

  // 시간 선택 시 스크롤 영역이 가운데로 위치하기 위한 커스텀 훅
  const { handleTimeSelect, ...hooks } = useDailyTimeSelect();

  return (
    <BottomSheet {...dailyTimeSheetProps} ref={bottomSheetRef} backdropComponent={renderBackDrop}>
      <View className="flex-1 pt-6">
        <BottomSheetHeader title="입차 예정 시간을 선택해 주세요." />
        <DailyTimeSheetMainContent {...hooks} onPress={handleTimeSelect} />
        <DailyTimeSheetFooter
          data={[
            {
              id: 1,
              component: (
                <Text typography="caption-md" className="text-neutral-900">
                  당일 구매 및 사용만 가능합니다.
                </Text>
              ),
            },
            {
              id: 2,
              component: (
                <View className="flex-row flex-wrap">
                  <Text typography="caption-md" className="text-neutral-900">
                    입차 예정 시간에서 벗어나도 <Text className="text-red-300">주차권 유효시간 내에 입차 시 이용 가능</Text>
                    합니다.
                  </Text>
                  <Pressable onPress={() => infoSheetRef.current?.present()}>
                    <View className="flex-row items-center gap-1">
                      <Text typography="caption-md" className="text-neutral-900 underline">
                        입차 예정 시간 안내
                      </Text>
                      <Icon name="arrowRight" className="w-2 text-neutral-900" />
                    </View>
                  </Pressable>
                </View>
              ),
            },
          ]}
          onPress={onPress}
        />
      </View>
    </BottomSheet>
  );
}
