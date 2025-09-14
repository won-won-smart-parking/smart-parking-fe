import { IconName } from "@shared/ui/atoms/icon/variant";

// SideMenuItem 컴포넌트 정적 데이터 타입 구성
export interface SideMenuItem {
  key: string;
  text: {
    label: string;
    className?: string;
  };
  icon: {
    name: IconName;
    className?: string;
  };
  to: string;
}

interface SideMenuSection {
  key: string;
  items: SideMenuItem[];
}

// SideMenuSection 정적 데이터 구성
export const sections: SideMenuSection[] = [
  {
    key: "primary",
    items: [
      { key: "vehicle", text: { label: "차량 관리" }, icon: { name: "carDoor" }, to: "" },
      { key: "ticket", text: { label: "내 주차권" }, icon: { name: "ticketOutline" }, to: "" },
      { key: "bookmark", text: { label: "즐겨찾기" }, icon: { name: "bookmarkOutline" }, to: "" },
    ],
  },
  {
    key: "service",
    items: [
      { key: "notice", text: { label: "공지 사항" }, icon: { name: "board" }, to: "" },
      { key: "setting", text: { label: "환경 설정" }, icon: { name: "setting" }, to: "" },
    ],
  },
];
