import z from "zod";

// Public 환경 변수 검증 스키마
export const PublicSchema = z.object({
  NODE_ENV: z
    .string({
      error: ".env 파일에 NODE_ENV 값이 필요합니다.",
    })
    .pipe(
      z.enum(["development", "test", "production"], {
        error: "NODE_ENV 값은 development | test | production 중 하나여야 합니다.",
      }),
    ),
  EXPO_PUBLIC_API_URL: z
    .string({
      error: ".env 파일에 EXPO_PUBLIC_API_URL 값이 필요합니다.",
    })
    .pipe(
      z.httpUrl({
        error: "EXPO_PUBLIC_API_URL은 http(s) 프로토콜의 유효한 URL이어야 합니다.",
      }),
    ),
});
