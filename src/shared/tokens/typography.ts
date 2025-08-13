// Figma에 정의한 Typography 스타일 변수 구성
export const typographyTokens = {
  // display 단위
  "display-default": "text-2xl font-bold",

  // heading 단위
  "heading-lg": "text-xl font-bold",
  "heading-md": "text-lg-tall font-bold",
  "heading-sm": "text-lg font-bold",

  // title 단위
  "title-md": "text-base-tall font-bold",
  "title-sm": "text-base font-bold",

  // label 단위
  "label-lg": "text-sm-tall font-bold",
  "label-md": "text-base-tall font-semibold",
  "label-sm": "text-base font-semibold",
  "label-tight": "text-sm-tall font-semibold",

  // placholder 단위
  "placeholder-default": "text-base-tall font-normal",

  // description 단위
  "description-md": "text-sm-tall font-normal",
  "description-sm": "text-sm-mid font-normal",

  // Body 단위
  "body-xl": "text-sm-xl font-medium",
  "body-lg": "text-sm-long font-medium",
  "body-md": "text-base font-medium",
  "body-sm": "text-sm-tall font-medium",
  "body-tight": "text-sm font-medium",

  // caption 단위
  "caption-xxl": "text-xs font-semibold",
  "caption-xl": "text-xs font-medium",
  "caption-lg": "text-base font-normal",
  "caption-md": "text-xs-long font-normal",
  "caption-sm": "text-xs-tall font-normal",
  "caption-tight": "text-xs font-normal",
};

export type TypographyKey = keyof typeof typographyTokens; // Typography 값과 키 값을 매핑한 타입 반환
