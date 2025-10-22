import { useRef, useState } from "react";
import { BottomSheetScrollViewMethods } from "@gorhom/bottom-sheet";

/** 선택 가능한 시간대 선택 시 스크롤 가능한 영역 중앙 정렬 커스텀 훅 */
/**
 * [ NOTE ]
 * - 현재 selected 같은 경우는 해당 파일에서 관리를 하고 있지만, 실제 결제 라우트 생성 시 해당 라우트 컴포넌트에서 관리를 해야 정확한 날짜 정보를 알 수 있음
 * - 왜냐하면 상태는 전역 상태를 사용하지 않는 경우 단방향 구조를 가지기 때문에 DailyTimeSheet 내부에서 부모로 상태를 전달할 수 있는 방법이 없기 때문
 */
export default function useDailyTimeSelect() {
  const [selected, setSelected] = useState<string | null>(null);

  // BottomSheetScrollView 내부 콘텐츠를 참조하여, 리렌더링 시에도 값이 유지되고 선택된 아이템을 기준으로 레이아웃 중앙 정렬하기 위한 참조 객체 구성
  const scrollRef = useRef<BottomSheetScrollViewMethods | null>(null);
  const viewportHeightRef = useRef(0);
  const contentHeightRef = useRef(0);
  const itemY = useRef<number[]>([]);
  const itemH = useRef<number[]>([]);

  // 시간 슬롯 선택 시 호출되는 이벤트 핸들
  const handleTimeSelect = (slot: string, idx: number) => {
    setSelected(slot);

    // 시간 슬롯 기준 중앙 정렬 애니메이션 효과 부여
    requestAnimationFrame(() => {
      const vh = viewportHeightRef.current || 0;
      const ch = contentHeightRef.current || 0;
      const y = itemY.current[idx] ?? 0;
      const h = itemH.current[idx] ?? 42;

      const target = y - (vh / 2 - h / 2);
      const max = Math.max(0, ch - vh);
      const clamped = Math.min(Math.max(target, 0), max);

      if (scrollRef.current) {
        scrollRef.current.scrollTo({ y: clamped, animated: true });
      }
    });
  };

  return { selected, scrollRef, viewportHeightRef, contentHeightRef, itemY, itemH, handleTimeSelect };
}
