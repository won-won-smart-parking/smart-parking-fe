// Chip 팔레트 기본값 -> 잘못된 분기를 통한 기본값 반환
// - Button 컴포넌트에서 팔레트 기본값이 사용은 되고 있지만, 그래도 undefined 반환보다는 예기치 않은 오류에 대해 안전하다고 판단하에 작성
const getDefaultChipPalette = (border: boolean) => {
  return border
    ? {
        bgColor: "bg-neutral-100",
        bgPressedColor: "bg-neutral-300",
        borderColor: "border-coolgray-200",
        borderPressedColor: "border-coolgray-300",
        textColor: "text-neutral-900",
        textPressedColor: "text-neutral-870",
        iconColor: "text-neutral-900",
        iconPressedColor: "text-neutral-870",
      }
    : {
        bgColor: "bg-coolgray-100",
        bgPressedColor: "bg-coolgray-300",
        borderColor: "border-transparent", // border 없는 경우도 명시
        borderPressedColor: "border-transparent",
        textColor: "text-neutral-900",
        textPressedColor: "text-neutral-870",
        iconColor: "text-neutral-900",
        iconPressedColor: "text-neutral-870",
      };
};

// Chip 분기에 따른 팔레트 반환
export const chipPalette = (variant: "label" | "icon" | "both", border: boolean, selected: boolean) => {
  // border가 true면서, label, icon, both인 경우
  if (border && ["label", "icon", "both"].includes(variant)) {
    // 선택된 상태
    if (selected) {
      return {
        bgColor: "bg-blue-200",
        bgPressedColor: "bg-blue-100",
        borderColor: "border-blue-300",
        borderPressedColor: "border-blue-300",
        textColor: "text-blue-300",
        textPressedColor: "text-blue-400",
        iconColor: "text-blue-300",
        iconPressedColor: "text-blue-400",
      };
    }

    // 선택되지 않은 상태
    return {
      bgColor: "bg-neutral-100",
      bgPressedColor: "bg-neutral-300",
      borderColor: "border-neutral-600",
      borderPressedColor: "border-neutral-600",
      textColor: "text-neutral-800",
      textPressedColor: "text-neutral-800",
      iconColor: "text-neutral-800",
      iconPressedColor: "text-neutral-800",
    };
  }

  // border가 false면서, both인 경우
  else if (!border && variant === "both") {
    // 선택된 상태
    if (selected) {
      return {
        bgColor: "bg-transparent",
        bgPressedColor: "bg-transparent",
        textColor: "text-neutral-950",
        textPressedColor: "text-neutral-1000",
        iconColor: "text-blue-300",
        iconPressedColor: "text-blue-400",
      };
    }

    // 선택되지 않은 상태
    return {
      bgColor: "bg-transparent",
      bgPressedColor: "bg-transparent",
      textColor: "text-neutral-800",
      textPressedColor: "text-neutral-900",
      iconColor: "text-neutral-800",
      iconPressedColor: "text-neutral-900",
    };
  }

  return getDefaultChipPalette(border); // 조건이 모두 부합하지 않은 분기일 경우 팔레트 기본값 반환
};
