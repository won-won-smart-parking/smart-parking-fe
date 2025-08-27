import { Image, View } from "react-native";
import { ParkingStatus } from "@shared/types/parking-status";
import { Tag, Text } from "@shared/ui/atoms";
import ParkingCardActionButton from "./part/ParkingCardActionButton";
import ParkingCardDescription from "./part/ParkingCardDescription";
import ButtonGroup from "../button-group";

interface Props {
  parkingTitle: string; // 주차장 이름
  parkingStatus: ParkingStatus; // 주차장 혼잡도 상태
  parkingType?: "public" | "private"; // 주차장 구분
  parkingImageUrl: string;
}

export default function ParkingCard({ parkingTitle, parkingStatus, parkingType, parkingImageUrl }: Props) {
  return (
    <View className="gap-4 pb-6 pt-4">
      {/* 주자창 정보 레이아웃 */}
      <View className="gap-2">
        <View className="gap-1.5">
          <View className="flex-row justify-between">
            <View>
              <Text typography="title-md">{parkingTitle}</Text>
              {/* 전기차 충전, CCTV 유무 등 옵션 */}
            </View>

            <Tag status={parkingStatus} />
          </View>

          <View className="gap-0.5">
            <ParkingCardDescription>{parkingType === "public" ? "공용주차장" : "민영주차장"}</ParkingCardDescription>
            <ParkingCardDescription>Status ･ Distance ･ Capacity (Available / Totla)</ParkingCardDescription>
          </View>
        </View>

        {/* 주차장 이미지 */}
        <Image source={{ uri: parkingImageUrl }} alt={parkingTitle} className="h-full w-full" />
      </View>

      {/* 주차장 버튼 그룹 */}
      <ButtonGroup>
        <ParkingCardActionButton iconName="direction" label="경로" />
        <ParkingCardActionButton iconName="call" label="전화" />
        <ParkingCardActionButton iconName="share" label="공유" />
        <ParkingCardActionButton iconName="bookmarkOutline" label="저장" />
      </ButtonGroup>
    </View>
  );
}
