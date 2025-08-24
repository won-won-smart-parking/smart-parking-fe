import fs from "fs";
import { $ZodIssue } from "zod/v4/core";
import type { MODE } from "./mode";

// Report 타입 구성
type Report = {
  mode: MODE;
  ok: boolean; // 환경 변수 유효성 검사 통과 여부
  validatedKeys: string[]; // 검증 대상 키 목록
  errors: {
    path: string;
    message: string;
  }[];
};

type BuildeReportParams = {
  mode: MODE;
  success: boolean;
  issues: $ZodIssue[];
  validatedKeys: string[];
};

// 환경 변수 유효성 검사 리포트 생성 후 반환
function buildReport(opts: BuildeReportParams): Report {
  return {
    mode: opts.mode,
    ok: opts.success,
    validatedKeys: opts.validatedKeys,
    errors: opts.success ? [] : opts.issues.map((issue) => ({ path: issue.path.join("."), message: issue.message })),
  };
}

// JSON 파일로 저장 (경로 없으면 스킵)
export function writeReport(reportPath: string | undefined, report: BuildeReportParams): void {
  try {
    if (!reportPath) {
      return;
    }

    fs.writeFileSync(reportPath, JSON.stringify(buildReport(report), null, 2));
  } catch {
    // 저장 실패로 빌드까지는 실패가 되지 않게 함
  }
}
