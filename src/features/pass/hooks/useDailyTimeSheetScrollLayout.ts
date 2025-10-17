import type { LayoutChangeEvent } from "react-native";

type NumberRef = React.RefObject<number>;
type NumberArrayRef = React.RefObject<number[]>;

// DailyTimeSheet 바텀 시트 내부의 ScrollView 레이아웃 높이 계산 커스텀 훅
export function useDailyTimeSheetScrollLayout(
  viewportHeightRef: NumberRef,
  contentHeightRef: NumberRef,
  itemY: NumberArrayRef,
  itemH: NumberArrayRef,
) {
  // BottomSheet ScrollView의 스크롤 가능한 영역 파악 이벤트 핸들러
  const handleViewportHeight = (event: LayoutChangeEvent) => {
    viewportHeightRef.current = event.nativeEvent.layout.height;
  };

  // BottomSheet ScrollView의 전체 높이 파악 이벤트 핸들러
  const handleContentHeight = (contentHeight: number) => {
    contentHeightRef.current = contentHeight;
  };

  // BottomSheet ScrollView 스크롤 콘텐츠 내부 요소가 차지하는 실제 영역
  const handleItemLayout = (event: LayoutChangeEvent, idx: number) => {
    itemY.current[idx] = event.nativeEvent.layout.y;
    itemH.current[idx] = event.nativeEvent.layout.height;
  };

  return { handleViewportHeight, handleContentHeight, handleItemLayout };
}
