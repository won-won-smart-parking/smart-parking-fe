// 버튼 컴포넌트 배경색, 테두리 색상 관련 palette 타입 지정
export interface ButtonContainerPalette {
  bgColor: string;
  bgPressedColor: string;
  borderColor: string;
  borderPressedColor: string;
}

// 버튼 컴포넌트 기본 배경색, 테두리 palette 지정
export const defaultPalette = (border: boolean): ButtonContainerPalette => {
  return {
    bgColor: "bg-neutral-100",
    bgPressedColor: "bg-neutral-300",
    borderColor: border ? "border-coolgray-200" : "",
    borderPressedColor: border ? "border-coolgray-300" : "",
  };
};
