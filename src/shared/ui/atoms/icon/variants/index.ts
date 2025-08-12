import { baseIcons } from "./base";
import { brandIcons } from "./brand";

// 모듈 집합 내보내기
export const registry = {
  ...baseIcons,
  ...brandIcons,
} as const;

// keyof -> 키들의 값을 타입 변환 (⚠️ 런타임 시점에 사라지기 때문에, 타입 변수에만 사용 가능)
// typeof -> 값을 기준으로 타입 반환 (⚠️ 객체는 Key-Value 형식의 인터페이스 타입 구조로 반환되지만, 단순 변수 선언은 리터럴 타입으로 반환)
// keyof typeof -> 값을 기준으로 타입 반환 후 해당 타입의 키들의 값으로 타입 반환
export type IconName = keyof typeof registry; // 모듈 집합 객체 키를 기준으로 타입 선언
