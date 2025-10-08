import { Href, useRouter } from "expo-router";
import { useUserStore } from "@entities/user/user.store";

// SideMenu 훅 로직
export function useSideMenu() {
  const store = useUserStore(); // 스토어에 저장된 User 전역 상태(Store State) 정보를 가져온다.
  const router = useRouter();

  const handleNavigate = (key: string, to: Href) => {
    if (key === "notice") router.navigate(to);
    else {
      if (store.isLoggedIn) router.navigate(to);
      else {
        // .. 로그인 유도 모달 오픈
        /**
         * [ NOTE ]
         * - 비로그인 모달 또는 토스트 메시지 UI 로직 연동을 통한 로그인 유도 로직 설계
         */
        // console.log("로그인을 진행해주세요...");
      }
    }
  };

  return { store, handleNavigate };
}
