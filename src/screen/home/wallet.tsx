import { View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { color } from "@utils/colors";
import TextComponents from "@components/text";

export default function Wallet() {
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
          height: "40%",
        }}
        source={require("@assets/icon/wallet.json")}
      />

      <TextComponents
        text={`Menu ini sedang\ndalam pengembangan`}
        fontSize={16}
        type="medium"
        textAlign="center"
      />
    </View>
  );
}
