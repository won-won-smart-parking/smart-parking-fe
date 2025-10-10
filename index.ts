import "expo-router/entry";
import enableMockServer from "@/mocks/server";

// 개발 환경에서만 Mock API 동작 수행
if (__DEV__) {
  if (window.server) {
    window.server.shutdown(); // 기존에 구동 중인 Mock Server가 있을 경우, Mock Server를 중단
  }

  // Mock Server 생성
  enableMockServer();
}
