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
  parkingMetaItems: string[];
  onPressDirection: () => void;
  onPressCall: () => void;
  onPressShare: () => void;
  onPressBookmark: () => void;
}

/**
 * Molecular / Parking Card
 *
 * Parking Card는 Atom 단위의 Text, Button과 Molecular 단위의 Button Group을 조합하여
 * 주차장 정보를 제공하는 레이아웃 컴포넌트이며, 비즈니스 로직을 포함하지 않습니다.
 *
 * [ NOTE - 2025.08.27 ]
 * - Figma 설계를 기반으로 레이아웃 구조는 문제없이 구현 가능하지만, 실제 서비스에서는 API 응답을 통해 주차장 데이터를 받아 Props를 구성해야 합니다.
 * - 현재 단계에서는 기본적인 Props와 레이아웃만 정의되어 있으며, 추후 API 연동 시 Props 구조를 재설계할 수 있습니다.
 * - 따라서 현 시점에서는 예시 및 반환 코드를 제공하지 않습니다.
 */
export default function ParkingCard({
  parkingTitle,
  parkingStatus,
  parkingType,
  parkingImageUrl,
  parkingMetaItems,
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
                [ NOTE - 2025.08.27 ]
                Figma 설계 상 이 위치에는 주차장 제공 서비스 리스트(CCTV, 전기차 충전소 등)가 표시되어야 함
                하지만 사용 예정인 '전국주차장정보표준데이터' API Response 항목을 다시 확인해보니 해당 데이터가 없어 구현 불가능 상태
                이로 인해, 추후 백엔드 개발 시 서비스 데이터 제공 방식 논의 후, 레이아웃 구조 및 관련 비즈니스 로직을 설계 / 구현 예정
              */}
            </View>

            <Tag status={parkingStatus} />
          </View>

          <View className="gap-0.5">
            <ParkingCardDescription>{parkingType === "public" ? "공용주차장" : "민영주차장"}</ParkingCardDescription>
            <ParkingCardDescription>{parkingMetaItems.join(" ･ ")}</ParkingCardDescription>
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
