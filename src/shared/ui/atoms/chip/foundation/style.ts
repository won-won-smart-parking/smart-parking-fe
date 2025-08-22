// Chip 분기에 따른 팔레트 반환
export const chipPalette = (border: boolean, selected: boolean) => {
  // border가 true면서, label, icon, both인 경우
  if (border) {
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
  else {
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
};
