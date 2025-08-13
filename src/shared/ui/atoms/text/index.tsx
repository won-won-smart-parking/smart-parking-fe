import clsx from "clsx";
import { Text as RNText, TextProps } from "react-native";
import { TypographyKey, typographyTokens } from "@shared/tokens/typography";

interface Props extends TextProps {
  variant?: TypographyKey;
}

// Design Token - Text 컴포넌트 선언
function Text({ variant = "caption-tight", className, children, ...rest }: Props) {
  return (
    <RNText className={clsx(typographyTokens[variant], className)} {...rest}>
      {children}
    </RNText>
  );
}

export default Text;
