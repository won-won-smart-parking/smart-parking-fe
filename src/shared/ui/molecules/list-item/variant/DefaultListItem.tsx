import clsx from "clsx";
import { View } from "react-native";
import { Icon, Text } from "@shared/ui/atoms";
import { IconName } from "@shared/ui/atoms/icon/variant";

export interface Props {
  title: string;
  direction?: "top" | "center"; // 리터럴 타입 유니온으로 구성
  description?: string;
  iconName?: IconName;
}

// 기본 리스트 아이템 컴포넌트입니다.
export default function DefaultListItem({ title, description, iconName, direction = "center" }: Props) {
  return (
    <View
      className={clsx(
        "flex-row justify-between border-b border-neutral-400 py-3",
        direction === "center" ? "items-center" : "items-start",
      )}
    >
      <View>
        <Text typography="description-md">{title}</Text>
        {description && ( // description은 string \ undefined이기 때문에 값이 없을 경우 출력되지 않는다.
          <Text typography="caption-sm" className="text-neutral-850">
            {description}
          </Text>
        )}
      </View>

      {iconName && <Icon name={iconName} />}
    </View>
  );
}
