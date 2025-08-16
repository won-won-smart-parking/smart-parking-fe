import clsx from "clsx";
import { Pressable, PressableProps, View } from "react-native";
import { elevation } from "@shared/tokens";
import { TypographyKey } from "@shared/tokens/typography";
import ButtonContent from "./content";
import { ButtonVariant, Category, defaultClasses, getA11yProps } from "./foundation";

// Button 컴포넌트 Props 타입 Omit<T, K>와 추가 속성의 타입을 정의
interface Props extends Omit<PressableProps, "children"> {
  category?: Category;
  content: ButtonVariant;

  /* 스타일 관련 Props 종류 */
  fullWidth?: boolean; // 버튼 크기 Full 여부
  roundFull?: boolean;
  border?: boolean; // 구분선 여부
  containerClassName?: string; // 버튼 컨테이너 스타일 오버라이딩
  iconSize?: string; // Content = "icon" + "both"인 경우 아이콘 크기 지정(현재는 기본값으로 설정됨)
  typography?: TypographyKey; // Text - Typography 스타일
  paletteOverride?: Partial<{
    bgIdle: string;
    bgPressed: string;
    borderIdle: string;
    borderPressed: string;
    textIdle: string;
    textPressed: string;
    iconIdle: string;
    iconPressed: string;
  }>;
  disablePressedEffect?: boolean;

  /* 접근성 관련 Props 종류 */
  disabled?: boolean;
  busy?: boolean;
  a11yLabel?: string;
  a11yHint?: string;
  a11yValueText?: string;
}

/**
 * Atom / Button
 *
 * 비즈니스 로직을 처리하는 버튼의 기본 스타일을 정의한 원자 단위 UI 버튼 컴포넌트입니다.
 *
 * [ 상호작용 규칙 ]
 * - `disabled` 또는 `busy`가 true인 경우, onPress와 pressed 효과가 비활성화됨
 * - pressed 상태일 때 `bg-color` / `border-color` / `text-color`는 팔레트 규칙에 따라 전환됨
 *
 * [ 접근성 규칙 ]
 * - role: `button`
 * - category가 `action`일 때: `accessibilityState.busy`를 통해 로딩 상태 노출 가능
 * - `disabled`는 `accessibilityState.disabled`에 반영됨
 *
 * @param props.category        버튼 카테고리: `"default"` | `"action"` (기본: `"default"`)
 * @param props.content         버튼 콘텐츠 변형/페이로드( label | icon | both 의 짝을 강제)
 * @param props.onPress         클릭 핸들러( `disabled` 또는 `busy`일 때 내부에서 호출 차단 )
 * @param props.fullWidth       가로폭 전체 사용 여부(기본: true). false면 호출부에서 폭/비율을 자유롭게 제어
 * @param props.roundFull       둥근 모서리 전체 적용 여부(기본: false → 8px, true → full)
 * @param props.border          테두리 표시 여부(기본: false)
 * @param props.containerClassName 컨테이너 클래스 오버라이드(Tailwind/NativeWind)
 * @param props.iconSize        아이콘 크기(예: 16, 20 등). icon/both 변형에서만 의미 있음
 * @param props.paletteOverride 배경/보더/텍스트의 idle/pressed 팔레트 부분 오버라이드
 * @param props.disablePressedEffect Pressed 효과 비활성화 여부
 * @param props.disabled        비활성화(true 시 onPress 가드 및 pressed 효과 비활성)
 * @param props.busy            처리 중 표시(action 전용). true 시 accessibilityState.busy 적용 및 onPress 가드
 * @param props.a11yLabel       스크린리더 라벨( icon-only일 때 필수 권장 )
 * @param props.a11yHint        동작 힌트(선택). 예: "선택한 필터를 적용합니다"
 * @param props.a11yValueText   상태 값 텍스트(선택). 예: "3개 선택됨"
 * @param props.rest            `PressableProps`의 기타 속성(테스트 id, 접근성 속성 등)
 *
 * @example
 * // 1) 기본 버튼
 * <Button
 *   content={{ variant: 'label', content: { text: '다음', accessibilityLabel: '다음' } }}
 * />
 *
 * // 2) 액션 버튼(조건 미충족으로 비활성)
 * <Button
 *   category="action"
 *   disabled
 *   a11yHint="필수 항목을 채우면 활성화됩니다"
 *   content={{ variant: 'label', content: { text: '적용', accessibilityLabel: '적용' } }}
 * />
 *
 * // 3) 아이콘 전용(라벨 필수)
 * <Button
 *   a11yLabel="뒤로 가기"
 *   content={{ variant: 'icon', content: { iconName: 'arrowLeft', accessibilityLabel: '뒤로 가기' } }}
 *   iconSize={18}
 * />
 *
 * // 4) 색/레이아웃 오버라이드
 * <Button
 *   paletteOverride={{ bgIdle: 'bg-primary-50', bgPressed: 'bg-primary-100', textIdle: 'text-primary-900', textPressed: 'text-primary-900' }}
 *   containerClassName="w-auto px-3 py-2 rounded-full"
 *   content={{ variant: 'both', content: { iconName: 'filter', text: '필터', accessibilityLabel: '필터' } }}
 * />
 *
 * @returns ReactElement 버튼 요소
 */
export default function Button({
  category = "default",
  content,
  onPress,
  fullWidth = true,
  roundFull = false,
  border = false,
  containerClassName,
  iconSize,
  typography,
  paletteOverride,
  disabled,
  disablePressedEffect = false,
  busy,
  a11yLabel,
  a11yHint,
  a11yValueText,
  ...rest
}: Props) {
  // 접근성 Props 구성
  const a11y = getA11yProps(category, {
    disabled,
    busy,
    label: a11yLabel ?? (content.variant === "label" ? content.content.accessibilityLabel : undefined),
    hint: a11yHint,
    valueText: a11yValueText,
  });

  return (
    <Pressable
      className={clsx(fullWidth ? "w-full" : "w-auto")}
      disabled={disabled || !!busy}
      onPress={disabled || !!busy ? undefined : onPress}
      {...rest}
      {...a11y}
    >
      {({ pressed }) => {
        const styles = defaultClasses(border, pressed, roundFull, paletteOverride);
        return (
          <View
            className={clsx(styles.container, containerClassName)}
            style={!disablePressedEffect && pressed ? elevation.active : null}
          >
            <ButtonContent
              {...content}
              styles={{ textStyle: styles.textStyle, iconStyle: styles.iconStyle }}
              iconSize={iconSize}
              typography={typography}
            />
          </View>
        );
      }}
    </Pressable>
  );
}
