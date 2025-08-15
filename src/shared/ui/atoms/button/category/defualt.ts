// 버튼 Default 타입일 경우 스타일 구성
export const defaultClasses = (outline: boolean) => {
  const base = "w-full rounded-[8px] flex items-center justify-center px-4 py-3";

  // Default / Button Container 스타일 구성
  const container = outline
    ? `${base} border boder-solid border-coolgray-200 bg-neutral-100`
    : `${base} bg-coolgray-100`;

  // Default / Button 스타일 반환
  return { container, content: "color-neutral-1000" };
};
