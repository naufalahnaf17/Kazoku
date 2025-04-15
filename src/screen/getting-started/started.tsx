import { View, StyleSheet } from "react-native";
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Icons.hexagram width={35} height={35} />
        <Icons.infinite width={35} height={35} />
      </View>

      <View style={styles.lottieWrapper}>
        <LottieView
          autoPlay
          style={styles.lottie}
          source={require("@assets/icon/chart.json")}
        />
      </View>

      <View style={styles.textWrapper}>
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

      <View style={styles.buttonWrapper}>
        <View style={styles.flexOne}>
          <ButtonComponents
            onPress={() => helperNavigationPush(navigation, "HomeTabs")}
            textButton="Get Started"
            textColor={color.white}
            textType="medium"
          />
        </View>
        <View style={styles.scanButton}>
          <Icons.scan width={30} height={30} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  header: {
    height: 70,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: spacing.normal,
  },
  lottieWrapper: {
    flex: 3,
    marginHorizontal: spacing.normal,
  },
  lottie: {
    flex: 1,
  },
  textWrapper: {
    padding: spacing.normal,
  },
  buttonWrapper: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.normal,
    gap: spacing.small,
  },
  flexOne: {
    flex: 1,
  },
  scanButton: {
    height: 50,
    width: 50,
    backgroundColor: color.lightgrey,
    borderRadius: spacing.small,
    alignItems: "center",
    justifyContent: "center",
  },
});
