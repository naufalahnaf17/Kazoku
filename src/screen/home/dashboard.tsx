import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import React from "react";
import { color } from "@utils/colors";
import { spacing } from "@utils/spacing";
import TextComponents from "@components/text";
import { Icons } from "@utils/icons";
import { BlurView } from "expo-blur";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatarWrapper}>
          <Image
            source={require("@assets/image/naufal.jpg")}
            style={styles.avatar}
          />
        </View>
        <View style={styles.headerText}>
          <TextComponents
            text="Welcome Back,"
            fontSize={12}
            color={color.grey}
          />
          <TextComponents text="Naufal Ahnaf" fontSize={15} type="medium" />
        </View>
        <Icons.menu width={30} height={30} />
      </View>

      {/* Balance Section */}
      <View style={styles.balanceSection}>
        <View style={styles.balanceTextWrapper}>
          <TextComponents text="Your balance Is" color={color.purple} />
          <TextComponents
            text="$ 100,00"
            color={color.textual}
            type="bold"
            fontSize={42}
          />
          <TextComponents text="Today 14 Sep 2022" color={color.grey} />
        </View>
        <View style={styles.cardWrapper}>
          <Image
            source={require("@assets/image/card.png")}
            resizeMode="stretch"
            style={styles.cardImage}
          />
        </View>
      </View>

      {/* Transaction Section */}
      <BlurView intensity={100} tint="light" style={styles.transactionWrapper}>
        <View style={styles.transactionHeader}>
          <TextComponents text="Transactions" type="bold" fontSize={18} />
        </View>
        <FlatList
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
          style={styles.transactionList}
          data={[
            "Netflix",
            "Netflix",
            "Amazon",
            "Amazon",
            "Vercel",
            "Vercel",
            "Netflix",
            "Amazon",
            "Vercel",
          ]}
          renderItem={({ item }) => (
            <View style={styles.transactionItem}>
              <View style={styles.iconContainer}>
                {item === "Netflix" ? (
                  <Icons.netflix width={20} height={20} />
                ) : item === "Amazon" ? (
                  <Icons.aws width={20} height={20} />
                ) : (
                  <Icons.vercel width={20} height={20} />
                )}
              </View>
              <View style={styles.transactionTextWrapper}>
                <TextComponents
                  text={item}
                  type="bold"
                  fontSize={16}
                  color={color.textual}
                />
                <TextComponents
                  text="Sep 12, 2022"
                  fontSize={13}
                  color={color.grey}
                />
              </View>
              <View style={styles.amountWrapper}>
                <TextComponents
                  text="-$10,00"
                  type="bold"
                  fontSize={16}
                  color={color.textual}
                />
                <TextComponents
                  text="09:31 AM"
                  fontSize={13}
                  color={color.grey}
                />
              </View>
            </View>
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  header: {
    alignItems: "center",
    padding: spacing.normal,
    flexDirection: "row",
    gap: spacing.small,
  },
  avatarWrapper: {
    height: 45,
    width: 45,
    backgroundColor: "blue",
    borderRadius: 22.5,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 22.5,
  },
  headerText: {
    flex: 1,
  },
  balanceSection: {
    flex: 1,
    alignItems: "center",
    paddingVertical: spacing.normal,
  },
  balanceTextWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  cardWrapper: {
    width: "80%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  transactionWrapper: {
    width: "100%",
    height: "45%",
    position: "absolute",
    backgroundColor: "#FFFFFFCC",
    bottom: 0,
  },
  transactionHeader: {
    paddingHorizontal: spacing.normal,
    paddingTop: spacing.normal,
  },
  transactionList: {
    flex: 1,
    paddingHorizontal: spacing.normal,
  },
  transactionItem: {
    marginBottom: spacing.small,
    alignItems: "center",
    paddingVertical: spacing.small,
    flexDirection: "row",
    gap: spacing.normal,
  },
  iconContainer: {
    height: 45,
    width: 45,
    backgroundColor: color.white,
    borderRadius: 22.5,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  transactionTextWrapper: {
    flex: 1,
  },
  amountWrapper: {
    alignItems: "flex-end",
  },
});
