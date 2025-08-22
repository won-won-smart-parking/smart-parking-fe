import clsx from "clsx";
import { ReactNode } from "react";
import { Pressable, PressableProps, View } from "react-native";
import { twMerge } from "tailwind-merge";
import { elevation } from "@/shared/tokens";
import { ButtonContainerPalette, defaultPalette } from "./styles";

// 공통 버튼 컴포넌트 Props 구성
export interface Props extends PressableProps {
  fullWidth?: boolean;
  border?: boolean;
  roundedFull?: boolean;
  disabled?: boolean;
  disablePressedEffect?: boolean;
  overrideButtonContainerStyles?: string;
  palette?: Partial<ButtonContainerPalette>;
  children?: ReactNode;
  renderContent?: (pressed: boolean) => ReactNode;
}

// 전역적으로 재사용하는 버튼 컴포넌트
export default function BaseButton({
  disabled = false,
  fullWidth = false,
  border = false,
  roundedFull = false,
  disablePressedEffect = false,
  overrideButtonContainerStyles = "",
  palette,
  onPress,
  children,
  renderContent,
}: Props) {
  return (
    <Pressable
      disabled={disabled}
      className={clsx(fullWidth ? "w-full" : "w-auto")}
      onPress={disabled ? null : onPress}
    >
      {({ pressed }) => {
        const mergedPalette = { ...defaultPalette(border), ...palette };

        return (
          <View
            className={twMerge(
              clsx(
                "flex items-center justify-center px-4 py-3",
                border && "border",
                roundedFull ? "rounded-full" : "rounded-[8px]",
                pressed
                  ? clsx(mergedPalette.bgPressedColor, mergedPalette.borderPressedColor)
                  : clsx(mergedPalette.bgColor, mergedPalette.borderColor),
                overrideButtonContainerStyles,
              ),
            )}
            style={!disablePressedEffect && pressed ? elevation.active : null}
          >
            {renderContent ? renderContent(pressed) : children}
          </View>
        );
      }}
    </Pressable>
  );
}
