import type { SvgProps } from "react-native-svg";
import { type IconName, registry } from "./variant";

// Atom / Icon 속성 타입 정의 (SvgProps 이용)
// Omit<T, K> 유니온 타입 -> T(TYPE)에서 K(KEY) 속성을 생략하고, 나머지를 선택한 새로운 타입 반환
interface Props extends Omit<SvgProps, "height" | "style"> {
  name?: IconName; // 기본값 = example
}

/**
 * Atom / Icon
 *
 * 지정한 이름 매개변수 값에 따라 아이콘을 렌더링하는 전역 컴포넌트
 *
 * @param props.name - 렌더링할 아이콘 이름 (기본값: example)
 * @param props.className - 아이콘의 사이즈, 색상을 지정할 수 있는 NativeWind 코드 입력 (허용값: w-*, color-*)
 *
 * @example
 * <Icon name="arrow-button" />
 * <Icon name="edit" className="w-4 color-neutral-300" />
 *
 * @returns 지정된 아이콘 컴포넌트
 */
export default function Icon({ name = "example", width: size = 24, color, ...rest }: Props) {
  const SvgIcon = registry[name]; // name에 맞는 실제 SVG 선택 (컴포넌트 변수)

  // prettier-ignore
  return (
    <SvgIcon
      width={size}
      height={size}
      color={color}
      accessible={!!name}
      accessibilityLabel={name}
      {...rest}
    />
  );
}
