import { ParkingStatus } from "@/shared/types/parking-status";

export const TagVariant: Record<ParkingStatus, { label: string; background: string; text: string }> = {
  available: { label: "여유", background: "bg-green-100", text: "text-green-200" },
  busy: { label: "혼잡", background: "bg-orange-100", text: "text-orange-200" },
  full: { label: "만차", background: "bg-red-100", text: "text-red-200" },
};
