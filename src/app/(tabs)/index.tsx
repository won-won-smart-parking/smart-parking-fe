import * as Location from "expo-location";
import { useEffect, useMemo, useRef, useState } from "react";
import { Alert, Dimensions, View } from "react-native";
import RNExitApp from "react-native-exit-app";
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

  const webViewRef = useRef<WebView>(null);

  /*
    ---------------------------------
    지도를 사용하기 위한 구조 
    ---------------------------------
    (사용자 위치 정보)
    1. 사용자의 위치 정보를 동의 여부를 구한다.                              -> (RN 처리)
      - ❌ 사용자가 위치 정보 동의를 하지 않은 경우 (서울 강남 좌표 기본값 전달)
      - ✅ 사용자가 위치 정보 동의를 한 경우 (사용자 현재 위치 좌표 전달)
    2. 가져온 사용자 위치(기본값 또는 현재 위치)를 웹 뷰로 전달한다.             -> (RN 처리)
    3. 모바일에서 전달받은 사용자 위치 정보를 기준으로 현재 지도의 위치를 표시한다.   -> (WebView(React)에서 처리)
    
    (데이터 구조화 후)
    1. 사용자 위치 주변의 주차장 정보를 서버에 요청 후, 응답받은 주차장 정보를 바텀 시트에 표시한다.             -> (RN 처리)
    2. 주차장 정보를 TanStack Query를 통해 캐싱과 신선도를 통해 중복 API 요청 방지 + 재사용 구조를 구성한다.  -> (RN 처리)
    3. 주차장 정보를 WebView에 전달하여 사용자 위치 주변의 주차장 정보 마커를 표시한다.                     -> (WebView(React)에서 처리)
    4. 주차장 마커를 클릭하면 해당 주차장 ID를 통해 바텀 시트 전환 구조를 구성한다. (메인 / 검색 페이지 <-> 주차장 페이지) -> (RN 처리)
  */
  useEffect(() => {
    const getUserPosition = async () => {
      const { granted } = await Location.requestForegroundPermissionsAsync(); // 앱 사용 도중 위치 권환 허용 여부

      // 1. 사용자 위치 정보 동의 여부에 맞춰서 WebView에 전달할 사용자 초기 좌표를 구성한다.
      const currentPosition = {
        type: "INIT_MAP",
        data: {
          granted: false,
          latitude: 37.496486063,
          longitude: 127.028361548,
        },
      };

      // ✅ 사용자가 위치 정보 동의를 한 경우 (사용자 현재 위치 좌표 전달)
      if (granted) {
        const { coords } = await Location.getCurrentPositionAsync();
        const location = await Location.reverseGeocodeAsync(coords);

        if (location[0].isoCountryCode !== "KR") {
          Alert.alert("Service Unavailable", "Smart Parking is currently available only on South Korea.", [
            {
              text: "Exit App",
              onPress: () => {
                RNExitApp.exitApp();
              },
            },
          ]);
        }

        currentPosition.data.granted = granted;
        currentPosition.data.latitude = coords.latitude;
        currentPosition.data.longitude = coords.longitude;
      }

      // 2. 가져온 사용자 위치(기본값 또는 현재 위치)를 웹 뷰로 전달한다.
      // 3. 모바일에서 전달받은 사용자 위치 정보를 기준으로 현재 지도의 위치를 표시한다.
      webViewRef.current?.postMessage(JSON.stringify(currentPosition));
    };

    getUserPosition();
  }, []);

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

      <View className="absolute bottom-0 top-0 w-full">
        <WebView
          ref={webViewRef}
          // source={{ uri: "http://192.168.200.142:5173" }}
          source={{ uri: process.env.EXPO_PUBLIC_KAKAO_MAP_WEB_VIEW_URL as string }}
          originWhitelist={["*"]}
          javaScriptEnabled
          domStorageEnabled
          // onLoadEnd={() => console.log("✅ WebView Loaded")}
          webviewDebuggingEnabled={true}
        />
      </View>

      <ParkingListSheet ref={sheetRef} snapPoints={snapPoints} />
    </SafeAreaView>
  );
}
