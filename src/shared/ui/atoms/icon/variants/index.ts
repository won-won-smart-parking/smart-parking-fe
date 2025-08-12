import { baseIcons } from "./base";
import { brandIcons } from "./brand";

// 모듈 집합 내보내기
export const registry = {
  ...baseIcons,
  ...brandIcons,
} as const;

export type IconName = keyof typeof registry; // 모듈 집합 객체 키를 기준으로 타입 선언
