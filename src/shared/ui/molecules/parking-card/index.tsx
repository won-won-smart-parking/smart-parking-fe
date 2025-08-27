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
  onPressDirection: () => void;
  onPressCall: () => void;
  onPressShare: () => void;
  onPressBookmark: () => void;
}

export default function ParkingCard({
  parkingTitle,
  parkingStatus,
  parkingType,
  parkingImageUrl,
  onPressDirection,
  onPressCall,
  onPressShare,
  onPressBookmark,
}: Props) {
  return (
    <View className="gap-4 pb-6 pt-4">
      {/* 주자창 정보 레이아웃 */}
      <View className="gap-2">
        <View className="gap-1.5">
          <View className="flex-row justify-between">
            <View>
              <Text typography="title-md">{parkingTitle}</Text>

              {/*
                NOTE:
                Figma 설계 상 이 위치에는 주차장 제공 서비스 리스트(CCTV, 전기차 충전소 등)가 표시되어야 함
                하지만 사용 예정인 '전국주차장정보표준데이터' API Response 항목을 다시 확인해보니 해당 데이터가 없어 구현 불가능 상태
                이로 인해, 추후 백엔드 개발 시 서비스 데이터 제공 방식 논의 후, 레이아웃 구조 및 관련 비즈니스 로직을 설계 / 구현 예정
              */}
            </View>

            <Tag status={parkingStatus} />
          </View>

          <View className="gap-0.5">
            <ParkingCardDescription>{parkingType === "public" ? "공용주차장" : "민영주차장"}</ParkingCardDescription>
            <ParkingCardDescription>Status ･ Distance ･ Capacity (Available / Totla)</ParkingCardDescription>
          </View>
        </View>

        {/* 주차장 이미지 */}
        <View className="max-h-[120px] items-center justify-center overflow-hidden rounded-[12px]">
          {parkingImageUrl && <Image source={{ uri: parkingImageUrl }} alt={parkingTitle} className="h-full w-full" />}
        </View>
      </View>

      {/* 주차장 버튼 그룹 */}
      <ButtonGroup>
        <ParkingCardActionButton iconName="direction" label="경로" onPress={onPressDirection} />
        <ParkingCardActionButton iconName="call" label="전화" onPress={onPressCall} />
        <ParkingCardActionButton iconName="share" label="공유" onPress={onPressShare} />
        <ParkingCardActionButton iconName="bookmarkOutline" label="저장" onPress={onPressBookmark} />
      </ButtonGroup>
    </View>
  );
}
