import { color } from "@utils/colors";
import React from "react";
import { View, SafeAreaView, StyleSheet, StatusBar } from "react-native";

const Wrapper = ({ children, style, onLayoutRootView }: any) => {
  return (
    <SafeAreaView onLayout={onLayoutRootView} style={styles.container}>
      <StatusBar backgroundColor={color.black} />
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
});

export default Wrapper;
