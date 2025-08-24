import dotenv from "dotenv";
import { getMode, type MODE } from "./mode";
import { PrivateSchema, PublicSchema } from "./schemas";

dotenv.config(); // .env 파일 내에 구성된 환경 변수 불러오기

// 현재 환경에 맞는 검증 모드 결정 및 환경 변수 스키마 조합
const currentMode: MODE = getMode((process.env.ENV_CHECK_MODE as MODE) ?? null); // 환경 변수 검증 모드 결정
const schema = currentMode === "light" ? PublicSchema : PublicSchema.and(PrivateSchema);

// 환경 변수 유효성 검사 + 로그 출력
const result = schema.safeParse(process.env);
if (result.success) console.log(`env check passed (${currentMode})`);
else {
  console.error(`env check failed (${currentMode})`);
  for (const issue of result.error.issues) {
    console.error(`- ${issue.path.join(".")}: ${issue.message} -`);
  }
  process.exit(1);
}
