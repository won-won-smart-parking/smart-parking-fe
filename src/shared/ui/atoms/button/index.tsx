import { Pressable, PressableProps } from "react-native";
import { defaultClasses } from "./category/defualt";
import ButtonContent, { Variant } from "./content";

// Button 컴포넌트 Props 타입 Omit<T, K>와 추가 속성의 타입을 정의
interface Props extends Omit<PressableProps, "children"> {
  category?: "default" | "action" | "filter";
  content: Variant;
}

export default function Button({ category = "default", content, onPress, ...rest }: Props) {
  const styles = defaultClasses(true);

  return (
    <Pressable {...rest} className={styles.container} onPress={onPress}>
      <ButtonContent styles={styles.content} {...content} />
    </Pressable>
  );
}
