import { PressableProps } from "react-native";
import Button from "@shared/ui/atoms/button";
import { socialButtonVariants, SocialType } from "./variant";

interface Props extends PressableProps {
  type: SocialType;
}

export default function SocialButton({ type, onPress }: Props) {
  const { iconSize, paletteOverride, a11yLabel, a11yHint } = socialButtonVariants[type];

  return (
    <Button
      category="default"
      content={{ variant: "icon", content: { iconName: type, accessibilityLabel: "" } }}
      fullWidth={false}
      roundFull={true}
      iconSize={iconSize}
      containerClassName="aspect-square w-13.5 h-13.5"
      paletteOverride={paletteOverride}
      a11yLabel={a11yLabel}
      a11yHint={a11yHint}
      onPress={onPress}
    />
  );
}
