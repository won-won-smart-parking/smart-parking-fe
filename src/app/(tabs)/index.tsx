import { useMemo, useRef, useState } from "react";
import { Dimensions, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import ParkingListSheet from "@features/pass/bottom-sheet/ParkingListSheet";
import BottomSheet from "@gorhom/bottom-sheet";

export default function MainScreen() {
  const sheetRef = useRef<BottomSheet>(null);

  // 홈 라우트 높이 계산 로직
  const { height } = Dimensions.get("screen");
  const { top, bottom } = useSafeAreaInsets();
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  const snapPoints = useMemo(() => {
    if (!headerHeight) {
      return ["25%"];
    }

    // 1. 모바일 기기에 따른 height(뷰포트 높이)를 구한다.
    // 2. SafeArea 영역의 노치 영역을 구한다.
    // 3. 검색 컨테이너의 Y + 레이아웃 높이를 구하여 레이아웃의 끝단을 위치를 구한다.
    // 4. 1, 2, 3번을 통해 구한 값들과 12(검색 컨테이너와 바텀 시트 간의 간격)을 빼서 각 모바일 기기에 대응할 수 있는 정확한 바텀 시트의 최대 지점 높이를 구한다.
    const maxSnap = height - top - bottom - headerHeight - 12;
    return [height * 0.25, maxSnap];
  }, [headerHeight, top, bottom, height]);

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      {/* 임시 검색 컨테이너 (주차장 리스트 바텀 시트 최대 높이 지점을 구하기 위함) */}
      <View
        className="absolute top-24 h-14 w-full bg-blue-300"
        onLayout={(e) => {
          const { y, height: layoutHeight } = e.nativeEvent.layout;
          setHeaderHeight(y + layoutHeight);
        }}
      />

      <View className="absolute bottom-0 top-0 w-full bg-neutral-900">
        <WebView source={{ uri: process.env.EXPO_PUBLIC_KAKAO_MAP_WEB_VIEW_URL as string }} />
      </View>

      <ParkingListSheet ref={sheetRef} snapPoints={snapPoints} />
    </SafeAreaView>
  );
}
