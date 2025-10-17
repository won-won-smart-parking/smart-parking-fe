import { useCallback, useRef } from "react";
import { View } from "react-native";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import { Chip, Text } from "@shared/ui/atoms";
import { IconName } from "@shared/ui/atoms/icon/variant";
import FilterGroup from "@shared/ui/molecules/filter-group";

// import type { Props as ParkingCardType } from "@shared/ui/molecules/parking-card";
// import ParkingCard from "@shared/ui/molecules/parking-card";

// 주차장 리스트 바텀 시트 흐름
// 1. 일반 바텀 시트
// 2. (선택적) 필터 구성 바텀 시트
// 3. 주차장 선택 시 바텀 시트 전환

interface Props {
  ref: React.RefObject<BottomSheet | null>;
  snapPoints: string[] | number[];
}

const filterGroupDummyData: { id: number; type: IconName; label: string }[] = [
  { id: 1, type: "filter", label: "" },
  { id: 2, type: "parking", label: "공용 주차장" },
  { id: 3, type: "car", label: "민영 주차장" },
  { id: 4, type: "building", label: "건물 주차장" },
];

// const parkingListDummyData: ParkingCardType[] = [
//   {
//     parkingTitle: "주차장 1",
//     parkingStatus: "available",
//     parkingType: "private",
//     onPressBookmark: () => console.log("bookmark"),
//     onPressCall: () => console.log("call"),
//     onPressDirection: () => console.log("direction"),
//     onPressShare: () => console.log("share"),
//     parkingImageUrl:
//       "https://png.pngtree.com/thumb_back/fw800/background/20230424/pngtree-people-and-cars-parked-in-a-parking-lot-image_2558301.jpg",
//     parkingMetaItems: ["영엽중", "221m"],
//   },
//   {
//     parkingTitle: "주차장 2",
//     parkingStatus: "busy",
//     parkingType: "private",
//     onPressBookmark: () => console.log("bookmark"),
//     onPressCall: () => console.log("call"),
//     onPressDirection: () => console.log("direction"),
//     onPressShare: () => console.log("share"),
//     parkingImageUrl:
//       "https://png.pngtree.com/thumb_back/fw800/background/20230424/pngtree-people-and-cars-parked-in-a-parking-lot-image_2558301.jpg",
//     parkingMetaItems: ["영엽중", "221m"],
//   },
//   {
//     parkingTitle: "주차장 3",
//     parkingStatus: "full",
//     parkingType: "private",
//     onPressBookmark: () => console.log("bookmark"),
//     onPressCall: () => console.log("call"),
//     onPressDirection: () => console.log("direction"),
//     onPressShare: () => console.log("share"),
//     parkingImageUrl:
//       "https://png.pngtree.com/thumb_back/fw800/background/20230424/pngtree-people-and-cars-parked-in-a-parking-lot-image_2558301.jpg",
//     parkingMetaItems: ["영엽중", "221m"],
//   },
//   {
//     parkingTitle: "주차장 4",
//     parkingStatus: "available",
//     parkingType: "private",
//     onPressBookmark: () => console.log("bookmark"),
//     onPressCall: () => console.log("call"),
//     onPressDirection: () => console.log("direction"),
//     onPressShare: () => console.log("share"),
//     parkingImageUrl:
//       "https://png.pngtree.com/thumb_back/fw800/background/20230424/pngtree-people-and-cars-parked-in-a-parking-lot-image_2558301.jpg",
//     parkingMetaItems: ["영엽중", "221m"],
//   },
// ];

export default function ParkingListSheet({ ref, snapPoints }: Props) {
  const filterSheetRef = useRef<BottomSheetModal | null>(null);

  const renderBackDrop = useCallback(
    (props: BottomSheetDefaultBackdropProps) => <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} opacity={0.6} />,
    [],
  );

  return (
    <BottomSheetModalProvider>
      <BottomSheet ref={ref} index={0} snapPoints={snapPoints} enableDynamicSizing={false}>
        <BottomSheetScrollView contentContainerClassName="gap-3 bg-neutral-200">
          {/* 필터 */}
          <View className="bg-neutral-100">
            <FilterGroup variant="scroll">
              {filterGroupDummyData.map(({ id, type, label }) => (
                <Chip
                  key={id}
                  variant="both"
                  iconName={type}
                  label={label}
                  onPress={() => {
                    if (type === "filter") {
                      if (filterSheetRef.current) {
                        filterSheetRef.current.present();
                      }
                    }
                  }}
                />
              ))}
            </FilterGroup>
          </View>

          {/* 정렬 + 주차장 리스트 */}
          <View className="flex-1 bg-neutral-100 px-6 py-4">
            <FilterGroup variant="sort">
              <Chip variant="both" iconName="check" label="거리순" border={false} />
              <Chip variant="both" iconName="check" label="가격순" border={false} />
            </FilterGroup>

            {/* {parkingListDummyData.length ? parkingListDummyData.map((data, idx) => <ParkingCard key={idx} {...data} />) : null} */}
          </View>
        </BottomSheetScrollView>
      </BottomSheet>

      <BottomSheetModal ref={filterSheetRef} backdropComponent={renderBackDrop} snapPoints={["100%"]}>
        <BottomSheetView className="h-40 bg-neutral-1000">
          <Text>Hello</Text>
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}
