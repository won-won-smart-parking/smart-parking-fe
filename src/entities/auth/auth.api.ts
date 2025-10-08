import { AxiosError } from "axios";
import { instance } from "@global/utils/axios";
import type { APIAsyncStateResult, SignInAPIAsyncStateResult } from "./auth.type";

/**
 * 회원가입 API 구성
 * - 이메일 중복 체크
 * - 회원가입
 */

// 회원가입 API 구성 - 이메일 중복 체크
export async function requestEmailValidation(email: string): Promise<APIAsyncStateResult> {
  try {
    await instance.get(`/api/auth/emails?email=${email}`);
    return { status: true };
  } catch (error) {
    if (error instanceof AxiosError) {
      const { status, response } = error; // HTTP 상태, 응답 결과를 구조 분해 할당으로 변수를 선언한다.

      // 각 상태 코드에 맞는 예외 분기를 지정한다.
      switch (status) {
        case 409: {
          // 중복된 데이터 분기 처리
          if (response?.data?.error) return { status: false, message: response?.data?.message };
          return { status: false, message: "" };
        }

        case 400: {
          return { status: false, message: "잘못된 요청입니다." };
        }

        default: {
          return { status: false, message: "알 수 없는 오류가 발생했습니다." };
        }
      }
    }

    return { status: false, message: "알 수 없는 오류가 발생했습니다." };
  }
}

// 회원가입 API 구성 - 회원가입
export async function requestSignUp(formData: FormData): Promise<APIAsyncStateResult> {
  try {
    await instance.post(`/api/auth/sign-up`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return { status: true };
  } catch (error) {
    return { status: false, message: "알 수 없는 오류가 발생했습니다." };
  }
}

// 로그인 API 구성 - 로그인
export async function requestSignIn(formData: FormData): Promise<SignInAPIAsyncStateResult> {
  try {
    const resposne = await instance.post(`/api/auth/sign-in`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return { status: true, data: resposne.data };
  } catch (error) {
    if (error instanceof AxiosError) {
      const { status, response } = error;

      // 각 상태에 맞는 예외 분기 처리를 진행한다.
      switch (status) {
        case 401: {
          if (response?.data?.error === "EMAIL_NOT_FOUND")
            return { status: false, code: "EMAIL_NOT_FOUND", message: response.data.message };
          else if (response?.data?.error === "INVALID_PASSWORD") {
            return { status: false, code: "INVALID_PASSWORD", message: response.data.message };
          }
        }
      }
    }

    return { status: false, message: "알 수 없는 오류가 발생했습니다." };
  }
}
