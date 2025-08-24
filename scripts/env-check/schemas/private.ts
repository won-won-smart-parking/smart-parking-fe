import z from "zod";

// Private 환경 변수 검증 스키마
export const PrivateSchema = z.object({});

export type PrivateEnv = z.infer<typeof PrivateSchema>; // PrivateSchema 내부 구조 타입 반환
