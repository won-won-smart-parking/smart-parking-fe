/**
 * 사용자 전역 상태 관리 항목
 * - isLogin: 사용자 로그인 여부
 * - userName: 사용자 이름
 * - userEmail: 사용자 이메일
 * - userProfileUrl: 사용자 프로필 주소
 */
import { create } from "zustand";

export const useUserStore = create(() => {
  return {
    user: {
      isLogin: false,
      userName: "",
      userEmail: "",
      userProfileUrl: "",
    },
    action() {
      // Reducer 함수의 action 객체와 같은 역할을 수행한다.
      /**
       * [ NOTE ]
       * - 로그인 API 설계 완료 후 set 로직 구성
       */
    },
  };
});
