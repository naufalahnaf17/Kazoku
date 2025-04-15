import { Text, StyleSheet, TextStyle } from "react-native";
import React from "react";
import { getResponsiveSize } from "@utils/responsive";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface TextComponentsProps {
  text: string;
  fontSize?: number;
  color?: string;
  type?: string;
  textAlign?: "left" | "right" | "center" | "justify";
  numberOfLines?: number;
  subText?: string;
  subTextColor?: string;
  subTextType?: string;
}

export default function TextComponents({
  text,
  fontSize,
  color,
  type,
  textAlign,
  numberOfLines,
  subText,
  subTextColor,
  subTextType,
}: TextComponentsProps) {
  const getFontFamily = (fontType?: string) => {
    switch (fontType) {
      case "bold":
        return "Poppins-Bold";
      case "medium":
        return "Poppins-Medium";
      case "regular":
      default:
        return "Poppins-Regular";
    }
  };

  const textStyle: TextStyle = {
    ...styles.text,
    fontFamily: getFontFamily(type),
    fontSize: fontSize || getResponsiveSize(14),
    color: color || Colors.black,
    textAlign: textAlign || "left",
  };

  const subTextStyle: TextStyle = {
    ...styles.subText,
    fontFamily: getFontFamily(subTextType),
    color: subTextColor,
  };

  return (
    <Text style={textStyle} numberOfLines={numberOfLines}>
      {text} <Text style={subTextStyle}>{subText}</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {},
  subText: {},
});
