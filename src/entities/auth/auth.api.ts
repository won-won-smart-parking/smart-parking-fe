import { AxiosError } from "axios";
import { instance } from "@global/utils/axios";

/**
 *
 * 회원가입 API 구성
 * - 이메일 중복 체크
 * - 휴대폰 인증 번호 전송
 * - 회원가입
 */

// 회원가입 API 구성 - 이메일 중복 체크
export async function validateDuplicateEmail(email: string): Promise<{ status: boolean; message?: string }> {
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
