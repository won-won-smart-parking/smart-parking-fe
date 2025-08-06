// Figma에 정의한 Typography 스타일 변수 구성
export const TypographyVariants = {
  // display 단위
  "display-default": "text-32px leading-40px font-bold",

  // heading 단위
  "heading-lg": "text-24px leading-32px font-bold",
  "heading-md": "text-20px leading-28px font-bold",
  "heading-sm": "text-20px leading-24px font-bold",

  // title 단위
  "title-md": "text-16px leading-24px font-bold",
  "title-sm": "text-16px leading-20px font-bold",

  // label 단위
  "label-lg": "text-14px leading-20px font-bold",
  "label-md": "text-16px leading-24px font-semibold",
  "label-sm": "text-16px leading-20px font-semibold",
  "label-tight": "text-14px leading-20px font-semibold",

  // placholder 단위
  "placeholder-default": "text-16px leading-24px font-normal",

  // description 단위
  "description-md": "text-14px leading-20px font-normal",
  "description-sm": "text-14px leading-18px font-normal",

  // Body 단위
  "body-xl": "text-14px leading-32px font-medium",
  "body-lg": "text-14px leading-24px font-medium",
  "body-md": "text-16px leading-20px font-medium",
  "body-sm": "text-14px leading-20px font-medium",
  "body-tight": "text-14px leading-16px font-medium",

  // caption 단위
  "caption-xxl": "text-12px leading-16px font-semibold",
  "caption-xl": "text-12px leading-16px font-medium",
  "caption-lg": "text-16px leading-20px font-normal",
  "caption-md": "text-12px leading-24px font-normal",
  "caption-sm": "text-12px leading-20px font-normal",
  "caption-tight": "text-12px leading-16px font-normal",
};

export type TypographyVariant = keyof typeof TypographyVariants; // Typography 값과 키 값을 매핑한 타입 반환
