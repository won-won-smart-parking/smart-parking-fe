import { usePathname } from "expo-router";
import { SectionTitleBase, sectionTitleConfig } from "./foundation";

/**
 * Molecular / Section Title
 *
 * 로그인, 회원가입, 비밀번호 재설정 페이지에서 공통으로 사용되는 Section Title 헤더 컴포넌트입니다.
 * 현재 라우트와 단계(step)에 따라 사전에 정의된 설정 값을 가져와, UI 컴포넌트(SectionTitleBase)에 전달하는 역할을 합니다.
 * 비즈니스 로직(옵션 선택 및 주입)이 포함되어 있습니다.
 */
export default function SectionTitle() {
  const config = sectionTitleConfig[usePathname()];
  const info = typeof config === "function" ? config(1) : config;

  return <SectionTitleBase title={info.title} label={info.label} />;
}

/**
 * [NOTE]
 * - 25.08.29 기준 UI를 담당하는 SectionTitleBase 컴포넌트만 집중되어 설계되어 옵션 관련 내용은 모두 예시 형태로 작성되어 있습니다.
 * - 차후 실제 페이지 개발 또는 비즈니스 로직 설계 단계에서 수정 및 보완이 필요합니다.
 */
