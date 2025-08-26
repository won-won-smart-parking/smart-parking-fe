// 각 소셜 버튼에 맞는 디자인 + 접근성 토큰(가이드) 구성
export const socialButtonVariants = {
  naver: {
    iconSize: "w-5",
    paletteOverride: {
      bgColor: "bg-[#03C75A]",
      bgPressedColor: "bg-[#03C75A]",
      iconColor: "text-[#FFFFFF]",
      iconPressedColor: "text-[#FFFFFF]",
    },
    // a11yLabel: "네이버 로그인",
    // a11yHint: "네이버 계정으로 인증을 시작합니다.",
  },
  kakao: {
    iconSize: "w-6",
    paletteOverride: {
      bgColor: "bg-[#FEE500]",
      bgPressedColor: "bg-[#FEE500]",
      iconColor: "text-[#191919]",
      iconPressedColor: "text-[#191919]",
    },
    // a11yLabel: "카카오 로그인",
    // a11yHint: "카카오 계정으로 인증을 시작합니다.",
  },
  facebook: {
    iconSize: "w-8",
    paletteOverride: {
      bgColor: "bg-[#1877F2]",
      bgPressedColor: "bg-[#1877F2]",
      iconColor: "text-[#FFFFFF]",
      iconPressedColor: "text-[#FFFFFF]",
    },
    // a11yLabel: "Facebook 로그인",
    // a11yHint: "Facebook 계정으로 인증을 시작합니다.",
  },
  apple: {
    iconSize: "w-6",
    paletteOverride: {
      bgColor: "bg-[#000000]",
      bgPressedColor: "bg-[#000000]",
      iconColor: "text-[#FFFFFF]",
      iconPressedColor: "text-[#FFFFFF]",
    },
    // a11yLabel: "Apple 로그인",
    // a11yHint: "Apple ID로 인증을 시작합니다.",
  },
};

export type SocialType = keyof typeof socialButtonVariants; // 각 소셜 타입 종류 반환
