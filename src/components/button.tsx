import { Pressable } from "react-native";
import React from "react";
import { getResponsiveSize } from "@utils/responsive";
import { spacing } from "@utils/spacing";
import TextComponents from "./text";
import { color } from "@utils/colors";
import { LinearGradient } from "expo-linear-gradient";

interface ButtonComponentsProps {
  onPress?: () => void;
  textButton?: string;
  backgroundColor?: string;
  textColor?: string;
  textType?: string;
  disabled?: boolean;
  loading?: boolean;
  height?: number;
}

export default function ButtonComponents({
  onPress,
  textButton,
  backgroundColor,
  textColor,
  textType,
  disabled,
  loading,
  height,
}: ButtonComponentsProps) {
  return (
    <LinearGradient
      colors={["#d584ec", "#d487ef", "#9d8ff3"]}
      style={{
        flex: height ? 1 : 0,
        borderRadius: getResponsiveSize(spacing.small),
      }}
    >
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={{
          flex: height ? 1 : 0,
          height: height ? getResponsiveSize(height) : getResponsiveSize(50),
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          borderRadius: getResponsiveSize(spacing.small),
        }}
      >
        <TextComponents
          text={textButton || ""}
          color={textColor}
          type={textType}
        />
      </Pressable>
    </LinearGradient>
  );
}
