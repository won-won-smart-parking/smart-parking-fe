import dotenv from "dotenv";
import fs from "fs";
import * as path from "path";
import { z } from "zod";

// env 로드
const envPath = path.resolve(process.cwd(), ".env");
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
}

// 환경 변수 유효성 검증 스키마 정의
const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  // 환경 변수 추가할 때마다 여기에 환경 변수 키값 추가
});

// 환경 변수 유효성 검증 실행
const result = EnvSchema.safeParse(process.env);
if (!result.success) {
  // console.error("❌ 환경 변수 검증 실패:");
  // for (const issue of result.error.issues) {
  //   console.error(`- ${issue.path.join(".")}: ${issue.message}`);
  // }
  process.exit(1);
}

// console.log("✅ 환경 변수 검증 통과");
