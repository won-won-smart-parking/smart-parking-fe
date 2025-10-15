import { ResponseUserData } from "@entities/auth/auth.type";

// Zustand User 전역 스토어 타입 구성
export interface UserStore {
  isLoggedIn: boolean;
  user: ResponseUserData["user"];
  init: () => void;
  login: (data: ResponseUserData) => void;
  logout: () => void;
}
