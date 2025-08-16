import { PressableProps } from "react-native";
import Button from "@shared/ui/atoms/button";
import { ButtonVariant } from "@shared/ui/atoms/button/foundation";

interface Props extends PressableProps {
  content: ButtonVariant;
  border?: boolean;
}

export default function Chip({ content, border = true }: Props) {
  return (
    <Button
      content={content}
      fullWidth={false}
      roundFull={true}
      border={border}
      iconSize="w-5"
      containerClassName="pl-3 pr-3"
      typography="description-md"
      disablePressedEffect
    />
  );
}
