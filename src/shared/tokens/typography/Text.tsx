import { Text as RNText, TextProps as RNTextProps } from "react-native";
import { TypographyVariant, TypographyVariants } from "./variants";
import clsx from "clsx";

interface Props extends RNTextProps {
  variant?: TypographyVariant;
  className?: string;
  children: React.ReactNode;
}

// Design Token - Text 컴포넌트 선언
function Text({ variant = "caption-tight", className, children, ...rest }: Props) {
  return (
    <RNText className={clsx(TypographyVariants[variant], className)} {...rest}>
      {children}
    </RNText>
  );
}

export default Text;
