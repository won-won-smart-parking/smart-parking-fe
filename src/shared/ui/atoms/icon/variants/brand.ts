// 브랜드 SVG 파일 import
import Apple from "@shared/assets/icon/brand/apple.svg";
import Facebook from "@shared/assets/icon/brand/facebook.svg";
import GoogleMap from "@shared/assets/icon/brand/google-map.svg";
import KakaoMap from "@shared/assets/icon/brand/kakao-map.svg";
import Kakao from "@shared/assets/icon/brand/kakao.svg";
import Kakaopay from "@shared/assets/icon/brand/kakaopay.svg";
import NaverMap from "@shared/assets/icon/brand/naver-map.svg";
import Naver from "@shared/assets/icon/brand/naver.svg";
import Naverpay from "@shared/assets/icon/brand/naverpay.svg";
import TMAP from "@shared/assets/icon/brand/tmap.svg";
import Tosspay from "@shared/assets/icon/brand/tosspay.svg";

// 브랜드 컴포넌트 상수 타입 단언을 통해 내보내기
export const brandIcons = {
  apple: Apple,
  facebook: Facebook,
  kakao: Kakao,
  naver: Naver,
  googleMap: GoogleMap,
  kakaoMap: KakaoMap,
  naverMap: NaverMap,
  tmap: TMAP,
  kakaopay: Kakaopay,
  naverpay: Naverpay,
  tosspay: Tosspay,
} as const;
