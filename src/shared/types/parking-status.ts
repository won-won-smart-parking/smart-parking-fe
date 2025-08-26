/**
 * 주차장 상태 타입
 * -------------------------------
 * 주차장의 상태를 나타내는 문자열 리터럴 타입입니다.
 * 별도 파일로 분리하여 관리함으로써 여러 컴포넌트에서 재사용성을 높이고,
 * 타입 안전성을 보장할 수 있습니다.
 *
 * 사용 예시:
 * const status: ParkingStatus = "available";
 */
export type ParkingStatus = "available" | "busy" | "full";
