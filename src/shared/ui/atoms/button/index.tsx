import { Pressable, PressableProps } from "react-native";
import ButtonContent, { Props as ButtonContentProps } from "./content";

interface Props extends Omit<PressableProps, "children"> {
  content: ButtonContentProps;
}

export default function Button({ content, onPress, ...rest }: Props) {
  return (
    <Pressable onPress={onPress} {...rest}>
      <ButtonContent {...content} />
    </Pressable>
  );
}
