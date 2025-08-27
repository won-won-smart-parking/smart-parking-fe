import { Image, View } from "react-native";
import { Button, Tag, Text } from "@shared/ui/atoms";
import ButtonGroup from "../button-group";

export default function ParkingCard() {
  return (
    <View className="gap-4 pb-6 pt-4">
      {/* 주자창  정보 레이아웃 */}
      <View>
        <View>
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

        <Image />
      </View>

      {/* 주차장 버튼 그룹 */}
      <ButtonGroup>
        <Button variant="both" iconName="direction" label="경로" />
        <Button variant="both" iconName="call" label="전화" />
        <Button variant="both" iconName="share" label="공유" />
        <Button variant="both" iconName="bookmarkOutline" label="저장" />
      </ButtonGroup>
    </View>
  );
}
