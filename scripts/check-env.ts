import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { z } from "zod";

// .env 환경 변수 검증 단계는 2단계로 나뉨
// - Light: 팀 개발에 흐름에 지장 없이 기본 동작만 보장할 수 있는 "공개 환경 변수(Public)"만 포함되어있는지 확인하는 검증 단계
// - Full: 배포 전 환경 전체(dev, product)에서 "모든 환경 변수(Public + Secret)"가 포함되어있는지 확인하는 검증 단계
const MODE = process.env.ENV_CHECK_MODE ?? "full";

// 1. env 로드
const envPath = path.resolve(process.cwd(), ".env");
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
}

// 2. 스키마 정의
const publicEnvSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  // EXPO_PUBLIC_API_BASE_URL 과 같은 Public이 붙은 공개키 환경 변수 포함
}); // 공개 환경 변수가 포함된 Light 검증 단계

const secretEnvSchema = z.object({}); // Full 단계에서 Light 단계랑 같이 수행되는 스키마

// 3. 환경에 따라 브랜치 선택
const envSchema = MODE === "public" ? publicEnvSchema : publicEnvSchema.and(secretEnvSchema);

// 4. 환경 변수 유효성 검증 실행
const result = envSchema.safeParse(process.env);
if (!result.success) {
  // console.error("❌ 환경 변수 검증 실패:");
  // for (const issue of result.error.issues) {
  //   console.error(`- ${issue.path.join(".")}: ${issue.message}`);
  // }
  process.exit(1);
}

// console.log("✅ 환경 변수 검증 통과");
