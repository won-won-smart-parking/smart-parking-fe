import clsx from "clsx";
import { Pressable, PressableProps, View } from "react-native";
import { elevation } from "@shared/tokens";
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
  paletteOverride?: Partial<{
    bgIdle: string;
    bgPressed: string;
    borderIdle: string;
    borderPressed: string;
    textIdle: string;
    textPressed: string;
  }>;

  /* 접근성 관련 Props 종류 */
  disabled?: boolean;
  busy?: boolean;
  a11yLabel?: string;
  a11yHint?: string;
  a11yValueText?: string;
}

export default function Button({
  category = "default",
  content,
  onPress,
  fullWidth = true,
  roundFull = false,
  border = false,
  containerClassName,
  iconSize,
  paletteOverride,
  disabled,
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
          <View className={clsx(styles.container, containerClassName)} style={pressed && elevation.active}>
            <ButtonContent {...content} styles={styles.content} iconSize={iconSize} />
          </View>
        );
      }}
    </Pressable>
  );
}
