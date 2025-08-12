import { SvgProps } from "react-native-svg";
import { IconName, registry } from "./variants";

// Atom / Icon 속성 타입 정의 (SvgProps 이용)
// Omit<T, K> 유니온 타입 -> T(TYPE)에서 K(KEY) 속성을 생략하고, 나머지를 선택한 새로운 타입 반환
type Props = Omit<SvgProps, "width" | "height" | "color"> & {
  name?: IconName; // 기본값 = example
  size?: number; // 기본값 = 24
  color?: string; // 기본값 = #A0A0A0
};

/**
 * Atom / Icon
 *
 * 지정한 이름 매개변수 값에 따라 아이콘을 렌더링하는 전역 컴포넌트
 *
 * @param {Object} props - 컴포넌트 속성
 * @param {IconName} [props.name="example"] - 렌더링할 아이콘 이름
 * @param {number} [props.size=24] - 아이콘 크기
 * @param {string} [props.color="#A0A0A0"] - 아이콘 색상 (아직 대기)
 *
 * @example
 * <Icon name="arrow-button" />
 * <Icon name="edit" size={32} color={color-neutral} />
 *
 * @returns {React.JSX.Element} - 지정된 아이콘 컴포넌트
 */
export default function Icon({ name = "example", size = 24, color = "#A0A0A0", ...rest }: Props) {
  const SvgIcon = registry[name];

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
