import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Variant as ButtonVariant, VariantKey as ButtonVariantKey } from "./variant";
import Icon from "../icon";
import Text from "../text";

// ButtonContent 타입 선언
// - variant(union): "label" | "icon" | "both"
// - content(object): ButtonVariant[variant]
// interface Props {
//   variant: ButtonVariantKey;
//   content: ButtonVariant;
// }
// -> 이렇게 하면 문제가 ButtonContent를 호출하는 쪽에서 모든 ButtonVariant를 구성을 다 보내줘야됨

// 맵드(Mapped) 타입을 통해 타입 실체 구조를 다음과 같이 변경
// {
//   label: { variant: 'label'; content: ButtonVariant['label'] };
//   icon:  { variant: 'icon';  content: ButtonVariant['icon']  };
//   both:  { variant: 'both';  content: ButtonVariant['both']  };
// }
// 인덱스드 엑세스 타입(Indexed Access Type)을 통해 타입 객체의 구조를 가지고 옴
// { ...위 구조 }["label" | "icon" | "both"]
// Props
// {
//   { variant: 'label'; content: ButtonVariant['label'] } |
//   { variant: 'icon';  content: ButtonVariant['icon']  } |
//   { variant: 'both';  content: ButtonVariant['both']  }
// }
type Props = {
  [K in ButtonVariantKey]: { variant: K; content: ButtonVariant[K] };
}[ButtonVariantKey];

export default function ButtonContent({ variant, content }: Props) {
  // 버튼 내부 콘텐츠의 구조를 정의
  switch (variant) {
    case "label": // 1) Text만 있는 구조
      return <Text accessibilityLabel={content.accessibilityLabel}>{content.text}</Text>;
    case "icon": // 2) Icon 있는 구조
      return <Icon name={content.iconName} accessibilityLabel={content.accessibilityLabel} />;
    case "both": // 3) Icon + Text 조합 구조
      return (
        <View accessibilityLabel={content.accessibilityLabel}>
          <Icon name={content.iconName} />
          <Text>{content.text}</Text>
        </View>
      );
    default:
      return null;
  }
}
