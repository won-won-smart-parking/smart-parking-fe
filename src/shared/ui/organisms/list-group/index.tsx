import { View } from "react-native";
import { Text } from "@shared/ui/atoms";
import ListItem, { Props as DefaultProps } from "@shared/ui/molecules/list-item";
import ParkingCard, { Props as CardProps } from "@shared/ui/molecules/parking-card";
import Ticket, { Props as TicketProps } from "@shared/ui/molecules/ticket";

type TitleType = "none" | "subtitle" | "title";

interface BaseProps {
  title?: string;
  titleType?: TitleType;
}

type ListGroupProps =
  | (BaseProps & { type: "card"; items: (CardProps & { id: string | number })[] })
  | (BaseProps & { type: "ticket"; items: (TicketProps & { id: string | number })[] })
  | (BaseProps & { type: "default"; items: (DefaultProps & { id: string | number })[] });

export default function ListGroup({ type, items, title, titleType = "none" }: ListGroupProps) {
  const renderTitle = {
    subtitle: (
      <Text className="text-neutral-850" typography="caption-sm">
        {title}
      </Text>
    ),
    title: (
      <Text className="text-neutral-1000" typography="label-tight">
        {title}
      </Text>
    ),
  };
  return (
    <View className="flex-col gap-2">
      {title && titleType !== "none" && renderTitle[titleType]}
      {items.map(({ id, ...props }) => {
        switch (type) {
          case "card":
            return <ParkingCard key={id} {...(props as CardProps)} />;
          case "ticket":
            return <Ticket key={id} {...(props as TicketProps)} />;
          case "default":
            return <ListItem key={id} {...(props as DefaultProps)} />;
        }
      })}
    </View>
  );
}
