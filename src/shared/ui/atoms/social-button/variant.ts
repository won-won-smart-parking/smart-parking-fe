// 각 소셜 버튼에 맞는 디자인 + 접근성 토큰(가이드) 구성
export const socialButtonVariants = {
  naver: {
    iconSize: "w-5",
    paletteOverride: {
      bgIdle: "bg-[#03C75A]",
      bgPressed: "bg-[#03C75A]",
      textIdle: "text-[#FFFFFF]",
      textPressed: "text-[#FFFFFF]",
    },
    a11yLabel: "네이버 로그인",
    a11yHint: "네이버 계정으로 인증을 시작합니다.",
  },
  kakao: {
    iconSize: "w-6",
    paletteOverride: {
      bgIdle: "bg-[#FEE500]",
      bgPressed: "bg-[#FEE500]",
      textIdle: "text-[#191919]",
      textPressed: "text-[#191919]",
    },
    a11yLabel: "카카오 로그인",
    a11yHint: "카카오 계정으로 인증을 시작합니다.",
  },
  facebook: {
    iconSize: "w-8",
    paletteOverride: {
      bgIdle: "bg-[#1877F2]",
      bgPressed: "bg-[#1877F2]",
      textIdle: "text-[#FFFFFF]",
      textPressed: "text-[#FFFFFF]",
    },
    a11yLabel: "Facebook 로그인",
    a11yHint: "Facebook 계정으로 인증을 시작합니다.",
  },
  apple: {
    iconSize: "w-6",
    paletteOverride: {
      bgIdle: "bg-[#000000]",
      bgPressed: "bg-[#000000]",
      textIdle: "text-[#FFFFFF]",
      textPressed: "text-[#FFFFFF]",
    },
    a11yLabel: "Apple 로그인",
    a11yHint: "Apple ID로 인증을 시작합니다.",
  },
};

export type SocialType = keyof typeof socialButtonVariants; // 각 소셜 타입 종류 반환
