import clsx from "clsx";
import { Text as RNText, TextProps } from "react-native";
import { type TypographyKey, typographyTokens } from "@shared/tokens/typography";

interface Props extends TextProps {
  typography?: TypographyKey;
}

// Design Token - Text 컴포넌트 선언
function Text({ typography = "caption-tight", className, children, ...rest }: Props) {
  return (
    <RNText className={clsx(typographyTokens[typography], className)} {...rest}>
      {children}
    </RNText>
  );
}

export default Text;
