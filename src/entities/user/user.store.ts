/**
 * 사용자 전역 상태 관리 항목
 * - isLogin: 사용자 로그인 여부
 * - userName: 사용자 이름
 * - userEmail: 사용자 이메일
 * - userProfileUrl: 사용자 프로필 주소
 */
import * as SecureStore from "expo-secure-store";
import { create } from "zustand";
import { type ResponseLoginData } from "@entities/auth/auth.api";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface UserStore {
  isLoggedIn: boolean;
  user: ResponseLoginData["user"];
  init: () => void;
  login: (data: ResponseLoginData) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>((set, _) => {
  return {
    isLoggedIn: false,
    user: {
      id: "",
      name: "",
      profile: "",
    },

    // 유저 정보 초기화 Action
    async init() {
      const storedUser = await AsyncStorage.getItem("user");

      // 앱 종료 후 유저 정보가 디스크에 저장된 경우 로그인을 유지시킨다.
      if (storedUser) {
        const parseUserInfo = JSON.parse(storedUser) as ResponseLoginData["user"];

        set({
          isLoggedIn: true,
          user: parseUserInfo,
        });
      }
    },

    // Login Action
    login(data: ResponseLoginData) {
      // 로그인 이후 전역 상태 값 변경
      set({
        isLoggedIn: true,
        user: {
          id: data.user.id,
          name: data.user.name,
          profile: data.user.profile,
        },
      });

      // Expo Secure Store를 통해 각 모바일 운영체제 내부의 보안 키 저장소에 토큰 저장
      SecureStore.setItemAsync("access-token", data.accessToken);
      SecureStore.setItemAsync("refresh-token", data.refreshToken);
      AsyncStorage.setItem("user", JSON.stringify(data.user));
    },

    // Logout Action
    logout() {
      // 로그인 이후 전역 상태 값 변경
      set({
        isLoggedIn: false,
        user: {
          id: "",
          name: "",
          profile: "",
        },
      });

      // Expo Secure Store를 통해 각 모바일 운영체제 내부의 보안 키 저장소에 토큰 저장
      SecureStore.deleteItemAsync("access-token");
      SecureStore.deleteItemAsync("refresh-token");
      AsyncStorage.removeItem("user");
    },
  };
});
