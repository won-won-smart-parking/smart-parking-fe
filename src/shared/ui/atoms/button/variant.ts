import type { IconName } from "../icon/variants";

// 베리언트 -> 버튼 내부 콘텐츠의 성질 정의
// - label: 버튼 내부 콘텐츠 텍스트만 존재
// - icon: 버튼 내부 콘텐츠 아이콘만 존재
// - both: 아이콘 + 라벨 조합
export type Variant = {
  label: {
    text: string;
    accessibilityLabel: string;
  };
  icon: {
    iconName: IconName;
    accessibilityLabel: string;
  };
  both: {
    text: string;
    iconName: IconName;
    accessibilityLabel: string;
  };
};
export type VariantKey = keyof Variant; // Variant 키 타입으로 추출
