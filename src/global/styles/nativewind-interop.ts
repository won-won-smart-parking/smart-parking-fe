// src/global/styles/nativewind-svg.ts
import { cssInterop } from "nativewind";
import Icon from "@/shared/ui/atoms/icon";

// cssInterop() -> className 규칙에 따라 스타일 객체를 특정 Prop으로 매핑
// target: false -> style props으로는 안 보냄
// nativeStyleToProp -> style 객체의 키를 동일한 이름의 실제 컴포넌트 prop으로 전달
cssInterop(Icon, {
  className: {
    target: false, // style로 보내지 않고 실제 prop으로만 주입
    nativeStyleToProp: {
      width: true, // w-* → width
      color: true, // color-* → color
    },
  },
});
