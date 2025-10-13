import clsx from "clsx";
import { Pressable } from "react-native";
import { BottomSheetScrollView, BottomSheetScrollViewMethods } from "@gorhom/bottom-sheet";
import { Text } from "@shared/ui/atoms";
import { useDailyTimeSheetScrollLayout } from "../hooks/useDailyTimeSheetScrollLayout";
import { timeSlots } from "../utils/dailyTimeSheet.utils";

type NumberRef = React.RefObject<number>;
type NumberArrayRef = React.RefObject<number[]>;

interface Props {
  scrollRef: React.Ref<BottomSheetScrollViewMethods>;
  viewportHeightRef: NumberRef;
  contentHeightRef: NumberRef;
  itemY: NumberArrayRef;
  itemH: NumberArrayRef;
  selected: string | null;
  onPress: (slot: string, idx: number) => void;
}

export default function DailyTimeSheetMainContent({
  scrollRef,
  viewportHeightRef,
  contentHeightRef,
  selected,
  itemY,
  itemH,
  onPress,
}: Props) {
  const { handleViewportHeight, handleContentHeight, handleItemLayout } = useDailyTimeSheetScrollLayout(
    viewportHeightRef,
    contentHeightRef,
    itemY,
    itemH,
  );

  return (
    <BottomSheetScrollView
      ref={scrollRef}
      onLayout={handleViewportHeight}
      onContentSizeChange={(_, h) => handleContentHeight(h)}
      contentContainerClassName="gap-3"
    >
      {timeSlots().map((slot, idx) => {
        const isSelected = selected === slot;

        return (
          <Pressable
            key={idx}
            onLayout={(e) => handleItemLayout(e, idx)}
            className={clsx("justify-center py-4", isSelected && "bg-blue-100")}
            onPress={() => onPress(slot, idx)}
          >
            <Text typography="body-md" className={clsx("text-center", isSelected ? "text-blue-400" : "text-neutral-800")}>
              {slot}
            </Text>
          </Pressable>
        );
      })}
    </BottomSheetScrollView>
  );
}
