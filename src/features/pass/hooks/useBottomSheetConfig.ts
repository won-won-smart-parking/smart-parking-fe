import { useCallback, useMemo } from "react";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import DailyTimeSheetBackdrop from "../part/BottomSheetBackdrop";

/**
 * -----------------------------------
 * 💡 Gorhom의 BottomSheet에 전달할 Props 설정을 구성하는 커스텀 훅입니다.
 * -----------------------------------
 */

/** 일일권 바텀 시트 내부에서 사용되는 구성 */
export function useDailyTimeSheetConfig() {
  const snapPoints = useMemo(() => ["84%"], []);
  const renderBackDrop = useCallback((props: BottomSheetDefaultBackdropProps) => DailyTimeSheetBackdrop(props), []);

  /**
   * index -> 특정 UI의 Press 이벤트 발동 이전에는 BottomSheet가 열리지 않아야됨
   * enableDynamicSizing -> BottomSheet의 크기가 Content 높이에 따라 BottomSheet의 높이가 결정되는 것이 아닌 snapPoints에 맞게 결정됨
   * enablePanDownToClose -> 사용자가 명시적인 Press 이벤트를 동작하지 않더라도 BottomSheet를 스크롤로 닫을 수 있어야 됨
   * snapPoints -> BottomSheet가 열리는 높이
   * renderBackDrop -> BottomSheet UI의 뒤의 레이아웃 구성
   */
  return {
    index: -1,
    enableDynamicSizing: false,
    enablePanDownToClose: true,
    snapPoints,
    renderBackDrop,
  };
}
