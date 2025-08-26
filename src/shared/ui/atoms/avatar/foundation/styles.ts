export type AvatarSize = "sm" | "md" | "lg";

export const avatarSizeStyle = {
  sm: "w-8 h-8 border",
  md: "w-18 h-18 border-2",
  lg: "w-25 h-25 border-4",
} as const;
