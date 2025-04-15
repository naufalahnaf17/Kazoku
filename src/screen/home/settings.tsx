import { View, StyleSheet } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { color } from "@utils/colors";
import TextComponents from "@components/text";
import { spacing } from "@utils/spacing";

export default function Settings() {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        style={styles.animation}
        source={require("@assets/icon/404.json")}
      />

      <View style={styles.spacer} />

      <TextComponents
        text={`Menu ini sedang\ndalam pengembangan`}
        fontSize={16}
        type="medium"
        textAlign="center"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.white,
  },
  animation: {
    width: "100%",
    height: "30%",
  },
  spacer: {
    marginTop: spacing.normal * 3,
  },
});
