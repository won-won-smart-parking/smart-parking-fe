import { PressableProps } from "react-native";
import Button from "@shared/ui/atoms/button";
import { socialButtonVariants, SocialType } from "./variant";

interface Props extends PressableProps {
  type: SocialType;
}
/**
 * Atom / Social Button
 *
 * 소셜 로그인에서 사용되는 버튼의 공통 UI 스타일과 접근성 속성을 정의한 원자 단위 컴포넌트입니다. 브랜드별 소셜 로그인 비즈니스 로직은 포함하지 않으며, Atom / Button 컴포넌트를 기반으로 구현되었습니다.
 *
 *
 * @param props.type      사용할 소셜 로그인 유형 (“naver” | “kakao” | “facebook” | “apple”)
 * @param props.onPress   소셜 로그인 동작을 처리하는 콜백 함수
 *
 * @example
 * // 1) 네이버 소셜 로그인 버튼
 * <SocialButton type="naver" />
 *
 * // 2) 카카오 소셜 로그인 버튼
 * <SocialButton type="kakao" />
 *
 * // 3) 페이스북 소셜 로그인 버튼
 * <SocialButton type="facebook" />
 *
 * // 4) 애플 소셜 로그인 버튼
 * <SocialButton type="apple" />
 *
 * @returns ReactElement 버튼 요소
 */
export default function SocialButton({ type, onPress }: Props) {
  const { iconSize, paletteOverride } = socialButtonVariants[type]; // Type 속성에 맞는 기본 variant 속성값 추출

  return (
    <Button
      variant="icon"
      roundedFull
      iconSize={iconSize}
      iconName={type}
      overrideButtonContainerStyles="aspect-square w-13.5 h-13.5"
      palette={paletteOverride}
      onPress={onPress}
      disablePressedEffect
    />
  );
}
