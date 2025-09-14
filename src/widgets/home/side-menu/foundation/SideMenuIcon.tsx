import { Icon } from "@shared/ui/atoms";
import { IconName } from "@shared/ui/atoms/icon/variant";

interface Props {
  name: IconName;
  className?: string;
}

export default function SideMenuIcon(props: Props) {
  return <Icon {...props} />;
}
