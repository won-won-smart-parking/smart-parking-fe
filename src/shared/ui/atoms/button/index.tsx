import clsx from "clsx";
import { Pressable, PressableProps, View } from "react-native";
import { elevation } from "@/shared/tokens";
import { defaultClasses } from "./category/defualt";
import ButtonContent, { Variant } from "./content";

// Button 컴포넌트 Props 타입 Omit<T, K>와 추가 속성의 타입을 정의
interface Props extends Omit<PressableProps, "children"> {
  category?: "default" | "action" | "filter";
  content: Variant;
  fullWidth?: boolean; // 버튼 크기 Full 여부
  outline?: boolean;
  containerClassName?: string; // 버튼 컨테이너 스타일 오버라이딩
  contentClassName?: string; // 버튼 내부 요소 스타일 오버라이딩
  paletteOverride?: Partial<{
    bgIdle: string;
    bgPressed: string;
    borderIdle: string;
    borderPressed: string;
    textIdle: string;
    textPressed: string;
  }>;
}

export default function Button({
  category = "default",
  content,
  onPress,
  fullWidth = true,
  outline = false,
  containerClassName,
  paletteOverride,
  ...rest
}: Props) {
  return (
    <Pressable
      accessible
      accessibilityRole="button"
      onPress={onPress}
      className={clsx(fullWidth ? "w-full" : "w-auto")}
      {...rest}
    >
      {({ pressed }) => {
        const styles = defaultClasses(outline, pressed, paletteOverride);
        return (
          <View className={clsx(styles.container, containerClassName)} style={pressed && elevation.active}>
            <ButtonContent {...content} styles={styles.content} />
          </View>
        );
      }}
    </Pressable>
  );
}
