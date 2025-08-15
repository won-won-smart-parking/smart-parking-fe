// Custom Spacing 디자인 토큰 값 정의
// 기본적으로 4배수를 사용하지만, 2px, 6px, ... N까지 사용되기 때문에 0.5 단위로 증감시킨다.
// N = 192 = O(N) -> 1초에 약 1억번 연산
// 성능상 부담 없음
const spacing: Record<string, string> = {};
for (let i = 1; i <= 96; i = Number(i + 0.5)) {
  spacing[String(i)] = `${Math.floor(i * 4)}px`;
}

export default spacing;
