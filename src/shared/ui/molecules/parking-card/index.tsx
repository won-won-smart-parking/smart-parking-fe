import { Image, View } from "react-native";
import { Tag, Text } from "@shared/ui/atoms";
import ParkingCardActionButton from "./part/ParkingCardActionButton";
import ButtonGroup from "../button-group";

export default function ParkingCard() {
  return (
    <View className="gap-4 pb-6 pt-4">
      {/* 주자창 정보 레이아웃 */}
      <View className="gap-2">
        <View className="gap-1.5">
          <View className="flex-row justify-between">
            <View>
              <Text typography="title-md">Parking Title</Text>
              {/* 전기차 충전, CCTV 유무 등 옵션 */}
            </View>
            <Tag status="available" />
          </View>

          <View className="gap-0.5">
            <Text>Parking Type</Text>
            <Text>Status ･ Distance ･ Capacity (Available / Totla) </Text>
          </View>
        </View>

        {/* 주차장 이미지 */}
        <Image />
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
