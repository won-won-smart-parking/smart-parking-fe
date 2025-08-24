import z from "zod";

// Public 환경 변수 검증 스키마
export const PublicSchema = z.object({
  NODE_ENV: z
    .string({
      error: ".env 파일에 NODE_ENV 값이 필요합니다.", // NODE ENV 환경 변수 값이 없거나, 문자열이 아닌 경우 에러 발생
    })
    .pipe(
      z.enum(["development", "test", "production"], {
        error: "NODE_ENV 값은 development | test | production 중 하나여야 합니다.",
      }),
    ),
});

export type PublicEnv = z.infer<typeof PublicSchema>; // PublicSchema 내부 구조 타입 반환
