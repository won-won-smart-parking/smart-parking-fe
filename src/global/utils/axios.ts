import axios from "axios";

// Axios 인스턴스 기본 구성
export const instance = axios.create({
  adapter: "fetch", // React Native는 API 요청 시 XHR(XMLHttpRequest) 방식이 아닌, Fetch 방식만 가능 (Axios adapter 기본값: xhr)
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});
