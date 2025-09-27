import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import PagerView, { PagerViewProps } from "react-native-pager-view";

type Props = { step: number } & Required<Pick<PagerViewProps, "children">>;

// 회원가입 단계마다 보여질 슬라이드 레이아웃
export default function StepPagerView({ step, children }: Props) {
  const pageRef = useRef<PagerView>(null);

  // 회원가입 단계가 변경될 때마다 step 상태를 의존하여
  // 컴포넌트 업데이트 시 슬라이드 위치 변경 사이드 이펙트 발생
  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.setPage(step - 1);
    }
  }, [step]);

  // 1. ref 객체 연결 (페이지 전환 제어용)
  // 2. style 속성 작성 (PagerView는 Nativewind 적용 안됨)
  // 3. 초기 슬라이드 페이지 전달 (Zero-based Numbering)
  // 4. 스크롤 가능 여부 X
  // 5. overScrollMode X
  return (
    <PagerView ref={pageRef} style={{ flex: 1 }} initialPage={0} scrollEnabled={false} overScrollMode="never">
      {Array.isArray(children) &&
        children.map((child, idx) => (
          <View key={idx} className="gap-6">
            {child}
          </View>
        ))}
    </PagerView>
  );
}
