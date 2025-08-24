import dotenv from "dotenv";
import { currentMode } from "./mode";
import { writeReport } from "./report";
import { PrivateSchema, PublicSchema } from "./schemas";

dotenv.config(); // .env 파일 내에 구성된 환경 변수 불러오기

const schema = currentMode === "light" ? PublicSchema : PublicSchema.and(PrivateSchema); // 환경 변수 스키마 조합
const result = schema.safeParse(process.env); // 환경 변수 유효성 검사

// GitHub Actions에 CI 로그 환경에서 출력할 리포트 생성
const [publicKeys, privateKeys] = [Object.keys(PublicSchema.shape ?? {}), Object.keys(PrivateSchema.shape ?? {})]; // 공개키 + 시크릿키 종합
const validatedKeys = currentMode === "light" ? publicKeys : [...new Set([...publicKeys, ...privateKeys])]; // 검증키 목록 구성
writeReport(process.env.ENV_REPORT_JSON, {
  mode: currentMode,
  success: result.success,
  validatedKeys,
  issues: result.success ? [] : result.error.issues,
});

/* eslint-disable no-console */
if (result.success) console.log(`✅ env check passed (${currentMode})`);
else {
  console.error(`❌ env check failed (${currentMode})`);
  for (const issue of result.error.issues) {
    console.error(`- ${issue.path.join(".")}: ${issue.message} -`);
  }
  process.exit(1);
}
