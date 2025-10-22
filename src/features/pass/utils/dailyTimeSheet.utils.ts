const formatTime = (time: number): string => String(time).padStart(2, "0"); // 한 자리 시간(또는 분) 두 자리 형식으로 변환 함수

// 일일권 바텀 시트 내부에서 현재 시간 기준을 바탕으로 화면에 리스트할 시간 데이터 구성 로직
export const timeSlots = (): string[] => {
  const slots: string[] = []; // 화면에 출력한 시간 데이터를 담는 배열

  // 현재 시간의 값을 30분 단위로 구분시켜 시작 시간을 구한다.
  const currentTime = new Date(); // 현재 시간
  const roundedMinutes = Math.ceil(currentTime.getMinutes() / 30) * 30;
  const [startHour, startMinute] = [
    roundedMinutes === 60 ? currentTime.getHours() + 1 : currentTime.getHours(),
    roundedMinutes === 60 ? 0 : roundedMinutes,
  ];

  // 구한 시작 시간을 기준으로, 30분 단위 이후의 시간을 slots 배열에 추가한다.
  for (let hour = startHour; hour < 24; hour++) {
    for (let minute = startMinute; minute < 60; minute += 30) {
      const slotStart = new Date(0, 0, 0, hour, minute);
      const slotEnd = new Date(slotStart.getTime() + 30 * 60 * 1000);

      slots.push(
        `${formatTime(slotStart.getHours())}:${formatTime(slotStart.getMinutes())} ~ ${formatTime(slotEnd.getHours())}:${formatTime(slotEnd.getMinutes())}`,
      );
    }
  }

  return slots;
};
