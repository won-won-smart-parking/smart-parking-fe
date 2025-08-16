import { Palette } from "@shared/ui/atoms/button/foundation";

// Chip 팔레트 기본값 -> 잘못된 분기를 통한 기본값 반환
// - Button 컴포넌트에서 팔레트 기본값이 사용은 되고 있지만, 그래도 undefined 반환보다는 예기치 않은 오류에 대해 안전하다고 판단하에 작성
const getDefaultChipPalette = (border: boolean): Palette => {
  return border
    ? {
        bgIdle: "bg-neutral-100",
        bgPressed: "bg-neutral-300",
        borderIdle: "border-coolgray-200",
        borderPressed: "border-coolgray-300",
        textIdle: "text-neutral-900",
        textPressed: "text-neutral-870",
        iconIdle: "text-neutral-900",
        iconPressed: "text-neutral-870",
      }
    : {
        bgIdle: "bg-coolgray-100",
        bgPressed: "bg-coolgray-300",
        borderIdle: "border-transparent", // border 없는 경우도 명시
        borderPressed: "border-transparent",
        textIdle: "text-neutral-900",
        textPressed: "text-neutral-870",
        iconIdle: "text-neutral-900",
        iconPressed: "text-neutral-870",
      };
};

// Chip 분기에 따른 팔레트 반환
export const chipPalettePreset = (variant: "label" | "icon" | "both", border: boolean, selected: boolean): Palette => {
  // border가 true면서, label, icon, both인 경우
  if (border && ["label", "icon", "both"].includes(variant)) {
    // 선택된 상태
    if (selected) {
      return {
        bgIdle: "bg-blue-200",
        bgPressed: "bg-blue-100",
        borderIdle: "border-blue-300",
        borderPressed: "border-blue-300",
        textIdle: "text-blue-300",
        textPressed: "text-blue-400",
        iconIdle: "text-blue-300",
        iconPressed: "text-blue-400",
      };
    }

    // 선택되지 않은 상태
    return {
      bgIdle: "bg-neutral-100",
      bgPressed: "bg-neutral-300",
      borderIdle: "border-neutral-600",
      borderPressed: "border-neutral-600",
      textIdle: "text-neutral-800",
      textPressed: "text-neutral-800",
      iconIdle: "text-neutral-800",
      iconPressed: "text-neutral-800",
    };
  }

  // border가 false면서, both인 경우
  else if (!border && variant === "both") {
    // 선택된 상태
    if (selected) {
      return {
        bgIdle: "bg-transparent",
        bgPressed: "bg-transparent",
        textIdle: "text-neutral-950",
        textPressed: "text-neutral-1000",
        iconIdle: "text-blue-300",
        iconPressed: "text-blue-400",
      };
    }

    // 선택되지 않은 상태
    return {
      bgIdle: "bg-transparent",
      bgPressed: "bg-transparent",
      textIdle: "text-neutral-800",
      textPressed: "text-neutral-900",
      iconIdle: "text-neutral-800",
      iconPressed: "text-neutral-900",
    };
  }

  return getDefaultChipPalette(border); // 조건이 모두 부합하지 않은 분기일 경우 팔레트 기본값 반환
};
