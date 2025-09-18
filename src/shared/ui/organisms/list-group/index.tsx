import { View } from "react-native";
import ListItem, { Props as DefaultProps } from "@shared/ui/molecules/list-item";
import ParkingCard, { Props as CardProps } from "@shared/ui/molecules/parking-card";
import Ticket, { Props as TicketProps } from "@shared/ui/molecules/ticket";

type ListGroupProps =
  | { type: "card"; items: (CardProps & { id: string | number })[] }
  | { type: "ticket"; items: (TicketProps & { id: string | number })[] }
  | { type: "default"; items: (DefaultProps & { id: string | number })[] };

export default function ListGroup({ type, items }: ListGroupProps) {
  return (
    <View className="flex-col gap-2">
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
