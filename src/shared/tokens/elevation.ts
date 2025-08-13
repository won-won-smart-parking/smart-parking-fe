import { StyleSheet } from "react-native";

/**
 * Box-Shadow 스타일 가이드 (React Native 기준)
 *
 * [ iOS 스타일 구성 요소 ]
 * - shadowColor: 그림자 색상
 * - shadowOffset:
 *    - width: 수평 위치 오프셋
 *    - height: 수직 위치 오프셋
 * - shadowOpacity: 그림자 투명도
 * - shadowRadius: 그림자 흐름(Blur) 정도
 *
 * [ Android 스타일 구성 ]
 * - elevation: 전체 그림자 깊이를 나타내는 속성 (숫자가 클수록 그림자가 깊어짐)
 *    - 대략적으로 shadowRadius의 절반 정도 값을 기준으로 설정됨
 */

export default StyleSheet.create({
  overlay: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  floating: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },
  raised: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
  },
  resting: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  active: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 2,
  },
  bottom: {
    shadowColor: "#000000",
    shadowOffset: {
      width: -2,
      height: 16,
    },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
  },
  side: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 4,
      height: 0,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
});
