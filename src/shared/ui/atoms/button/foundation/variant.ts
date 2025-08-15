import type { IconName } from "@shared/ui/atoms/icon/variants/index";

// 베리언트 -> 버튼 내부 콘텐츠의 성질 정의
// - label: 버튼 내부 콘텐츠 텍스트만 존재
// - icon: 버튼 내부 콘텐츠 아이콘만 존재
// - both: 아이콘 + 라벨 조합
type VariantContent = {
  label: { text: string; accessibilityLabel: string };
  icon: { iconName: IconName; accessibilityLabel: string };
  both: { text: string; iconName: IconName; accessibilityLabel: string };
};
type VariantKey = keyof VariantContent; // Variant 키 타입으로 추출

// ButtonContent 타입 선언
// - variant(union): "label" | "icon" | "both"
// - content(object): ButtonVariant[variant]
// interface Props {
//   variant: ButtonVariantKey;
//   content: ButtonVariant;
// }
// -> 이렇게 하면 문제가 ButtonContent를 호출하는 쪽에서 모든 ButtonVariant를 구성을 다 보내줘야됨

// 맵드(Mapped) 타입을 통해 타입 실체 구조를 다음과 같이 변경
// {
//   label: { variant: 'label'; content: ButtonVariant['label'] };
//   icon:  { variant: 'icon';  content: ButtonVariant['icon']  };
//   both:  { variant: 'both';  content: ButtonVariant['both']  };
// }
// 인덱스드 엑세스 타입(Indexed Access Type)을 통해 타입 객체의 구조를 가지고 옴
// { ...위 구조 }["label" | "icon" | "both"]
// Props
// {
//   { variant: 'label'; content: ButtonVariant['label'] } |
//   { variant: 'icon';  content: ButtonVariant['icon']  } |
//   { variant: 'both';  content: ButtonVariant['both']  }
// }
export type Variant = {
  [K in VariantKey]: { variant: K; content: VariantContent[K] };
}[VariantKey];
