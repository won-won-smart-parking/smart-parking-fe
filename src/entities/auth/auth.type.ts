export type APIAsyncStateResult = { status: boolean; message?: string }; // Auth API에서 기본적으로 반환하는 Promise 객체 타입 구성

/* 로그인 API에서 반환하는 Promise 객체 타입 구성 */
export interface ResponseUserData {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    name: string;
    profile: string;
  };
}
export type SignInAPIAsyncStateResult = APIAsyncStateResult & { data?: ResponseUserData; code?: string };
