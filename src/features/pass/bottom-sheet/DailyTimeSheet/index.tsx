import { useRef } from "react";
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import type { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import DailyTimeSheetInfo from "./DailyTimeSheetInfo";
import DailyTimeSheetMain from "./DailyTimeSheetMain";

interface Props {
  ref: React.RefObject<BottomSheetMethods | null>;
  onPress: () => void;
}

export default function DailyTimeSheet({ ref, onPress }: Props) {
  const infoSheetRef = useRef<BottomSheetModal | null>(null);

  return (
    <BottomSheetModalProvider>
      <DailyTimeSheetMain bottomSheetRef={ref} infoSheetRef={infoSheetRef} onPress={onPress} />
      <DailyTimeSheetInfo infoSheetRef={infoSheetRef} />
    </BottomSheetModalProvider>
  );
}
