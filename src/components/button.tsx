import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { getResponsiveSize } from "@utils/responsive";
import { spacing } from "@utils/spacing";
import TextComponents from "./text";
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
  const dynamicContainerStyle = {
    flex: height ? 1 : 0,
    borderRadius: getResponsiveSize(spacing.small),
  };

  const dynamicPressableStyle = {
    flex: height ? 1 : 0,
    height: height ? getResponsiveSize(height) : getResponsiveSize(50),
    borderRadius: getResponsiveSize(spacing.small),
  };

  return (
    <LinearGradient
      colors={["#d584ec", "#d487ef", "#9d8ff3"]}
      style={[styles.container, dynamicContainerStyle]}
    >
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={[styles.pressable, dynamicPressableStyle]}
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

const styles = StyleSheet.create({
  container: {},
  pressable: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
