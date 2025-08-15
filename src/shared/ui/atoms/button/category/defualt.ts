import clsx from "clsx";

interface Palette {
  bgIdle: string;
  bgPressed: string;
  borderIdle?: string;
  borderPressed?: string;
  textIdle: string;
  textPressed: string;
}

// 배경색 + 텍스트 색상 기본 스타일 부여(Pressed 효과까지 포함)
function getDefaultPalette(outline: boolean): Palette {
  return outline
    ? {
        bgIdle: "bg-neutral-100",
        bgPressed: "bg-neutral-300",
        borderIdle: "border-coolgray-200",
        borderPressed: "border-coolgray-300",
        textIdle: "text-neutral-900",
        textPressed: "text-neutral-870",
      }
    : {
        bgIdle: "bg-coolgray-100",
        bgPressed: "bg-coolgray-300",
        textIdle: "text-neutral-900",
        textPressed: "text-neutral-870",
      };
}

// 버튼 Default 타입일 경우 스타일 구성
export const defaultClasses = (
  border: boolean,
  pressed: boolean,
  roundFull?: boolean,
  paletteOverride?: Partial<Palette>,
) => {
  const base = clsx(roundFull ? "rounded-full" : "rounded-[8px]", "flex items-center justify-center px-4 py-3");

  // Default / Button 배경색 + 구분선 스타일 구성 (border=false인 경우 구분선 없음)
  const palette: Palette = { ...getDefaultPalette(border), ...paletteOverride }; // 객체는 동일한 키에 값이 부여되면 뒤에 들어온 값으로 덮어씌워지게 됨
  const container = clsx(
    base,
    border && "border border-solid",
    pressed ? clsx(palette.bgPressed, palette.borderPressed) : clsx(palette.bgIdle, palette.borderIdle),
  );

  // Default / Button 텍스트 스타일 구성
  const content = pressed ? palette.textPressed : palette.textIdle;

  // Default / Button 스타일 반환
  return { container, content };
};
