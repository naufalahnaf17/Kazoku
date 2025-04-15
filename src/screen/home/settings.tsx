import { View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { color } from "@utils/colors";
import TextComponents from "@components/text";
import { spacing } from "@utils/spacing";

export default function Settings() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color.white,
      }}
    >
      <LottieView
        autoPlay
        style={{
          width: "100%",
          height: "30%",
        }}
        source={require("@assets/icon/404.json")}
      />

      <View style={{ marginTop: spacing.normal * 3 }} />

      <TextComponents
        text={`Menu ini sedang\ndalam pengembangan`}
        fontSize={16}
        type="medium"
        textAlign="center"
      />
    </View>
  );
}
