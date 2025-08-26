import clsx from "clsx";

export function Track(selected: boolean, pressed: boolean) {
  return clsx(
    "w-12 h-6 rounded-full flex-row items-center",
    !selected && !pressed && "bg-coolgray-200",
    !selected && pressed && "bg-coolgray-300",
    selected && !pressed && "bg-blue-300",
    selected && pressed && "bg-blue-400",
  );
}

export function Thumb(selected: boolean, pressed: boolean) {
  return clsx(
    "w-5 h-5 rounded-full absolute bg-neutral-100",
    !selected && pressed && "bg-neutral-200",
    selected && pressed && "bg-neutral-200",
    selected ? "translate-x-6.5" : "translate-x-0.5",
    // Off 상태: translate-x-0.5 → Track 왼쪽 끝에서 살짝 여백
    // On 상태: translate-x-6.5 → Track 오른쪽 끝으로 이동
    // 이 값은 Track과 Thumb 크기에 맞춰 자연스러운 좌우 간격을 줌
  );
}
