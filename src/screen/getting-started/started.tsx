import { View } from "react-native";
import React from "react";
import { color } from "@utils/colors";
import { Icons } from "@utils/icons";
import { spacing } from "@utils/spacing";
import TextComponents from "src/components/text";
import LottieView from "lottie-react-native";
import ButtonComponents from "src/components/button";
import { helperNavigationPush } from "@utils/helper";
import { useNavigation } from "@react-navigation/native";

export default function Started() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: color.white }}>
      <View
        style={{
          height: 70,
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          padding: spacing.normal,
        }}
      >
        <Icons.hexagram width={35} height={35} />
        <Icons.infinite width={35} height={35} />
      </View>
      <View
        style={{
          flex: 3,
          marginHorizontal: spacing.normal,
        }}
      >
        <LottieView
          autoPlay
          style={{
            flex: 1,
          }}
          source={require("@assets/icon/chart.json")}
        />
      </View>
      <View style={{ padding: spacing.normal }}>
        <TextComponents
          text={`Find way to\nmanage`}
          subText="your finance"
          subTextColor={color.purple}
          fontSize={38}
          subTextType="medium"
          color={color.textual}
        />
        <TextComponents
          text={`The most Transparent &\nSecurity Bank ever`}
          fontSize={16}
          color={color.grey}
        />
      </View>
      <View
        style={{
          height: 80,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: spacing.normal,
          gap: spacing.small,
        }}
      >
        <View style={{ flex: 1 }}>
          <ButtonComponents
            onPress={() => helperNavigationPush(navigation, "HomeTabs")}
            textButton="Get Started"
            textColor={color.white}
            textType="medium"
          />
        </View>
        <View
          style={{
            height: 50,
            width: 50,
            backgroundColor: color.lightgrey,
            borderRadius: spacing.small,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icons.scan width={30} height={30} />
        </View>
      </View>
    </View>
  );
}
