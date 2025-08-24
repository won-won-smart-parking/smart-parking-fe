export type MODE = "light" | "full"; // 환경 변수 검증은 light(공개키만 검증) | full(공개키 + 시크릿키 검증) 단계로 나뉨

// 실행 환경에 맞는 환경 변수 검증 모드 반환
export const getMode = (mode?: MODE | null): MODE => {
  const current = (mode ?? "").trim().toLowerCase();
  return current === "light" ? "light" : "full";
};
