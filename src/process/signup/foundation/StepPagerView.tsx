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

  return (
    <PagerView ref={pageRef} style={{ flex: 1 }} initialPage={0} scrollEnabled={false}>
      {Array.isArray(children) &&
        children.map((child, idx) => (
          <View key={idx} className="gap-6">
            {child}
          </View>
        ))}
    </PagerView>
  );
}
