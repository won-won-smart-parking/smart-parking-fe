import clsx from "clsx";
import { View } from "react-native";
import Icon from "@shared/ui/atoms/icon";
import Text from "@shared/ui/atoms/text";
import { ButtonVariant } from "./foundation";

// ButtonContent Props 타입 정의
type Props = ButtonVariant & {
  styles: string;
  iconSize?: string;
};

export default function ButtonContent({ variant, content, styles, iconSize }: Props) {
  // 버튼 내부 콘텐츠의 구조를 정의
  switch (variant) {
    case "label": // 1) Text만 있는 구조
      return (
        <Text variant="label-tight" className={styles} accessible={false}>
          {content.text}
        </Text>
      );
    case "icon": // 2) Icon 있는 구조
      return <Icon className={clsx(styles, iconSize)} name={content.iconName} accessible={false} />;
    case "both": // 3) Icon + Text 조합 구조
      return (
        <View className="flex flex-row items-center justify-center gap-2" accessible={false}>
          <Icon name={content.iconName} className={clsx(styles, iconSize)} accessible={false} />
          <Text variant="label-tight" className={styles} accessible={false}>
            {content.text}
          </Text>
        </View>
      );
  }
}
