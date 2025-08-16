import clsx from "clsx";
import { View } from "react-native";
import { TypographyKey } from "@shared/tokens/typography";
import Icon from "@shared/ui/atoms/icon";
import Text from "@shared/ui/atoms/text";
import { ButtonVariant } from "./foundation";

// ButtonContent Props 타입 정의
type Props = ButtonVariant & {
  styles: {
    textStyle: string;
    iconStyle: string;
  };
  iconSize?: string;
  typography?: TypographyKey;
};

export default function ButtonContent({ variant, content, styles, iconSize, typography = "label-tight" }: Props) {
  // 버튼 내부 콘텐츠의 구조를 정의
  switch (variant) {
    case "label": // 1) Text만 있는 구조
      return (
        <Text variant={typography} className={styles.textStyle} accessible={false}>
          {content.text}
        </Text>
      );
    case "icon": // 2) Icon 있는 구조
      return <Icon className={clsx(styles.iconStyle, iconSize)} name={content.iconName} accessible={false} />;
    case "both": // 3) Icon + Text 조합 구조
      return (
        <View className="flex flex-row items-center justify-center gap-2" accessible={false}>
          <Icon name={content.iconName} className={clsx(styles.iconStyle, iconSize)} accessible={false} />
          <Text variant={typography} className={styles.textStyle} accessible={false}>
            {content.text}
          </Text>
        </View>
      );
  }
}
