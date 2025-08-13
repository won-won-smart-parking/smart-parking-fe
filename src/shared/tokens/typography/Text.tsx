import clsx from "clsx";
import { Text as RNText, TextProps as RNTextProps } from "react-native";
import { TypographyKey, typographyTokens } from "../typography";

interface Props extends RNTextProps {
  variant?: TypographyKey;
  className?: string;
  children: React.ReactNode;
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
