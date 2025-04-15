import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { color } from "@utils/colors";
import { spacing } from "@utils/spacing";
import TextComponents from "@components/text";
import { Icons } from "@utils/icons";
import { BlurView } from "expo-blur";

export default function Dashboard() {
  return (
    <View style={{ flex: 1, backgroundColor: color.white }}>
      <View
        style={{
          alignItems: "center",
          padding: spacing.normal,
          flexDirection: "row",
          gap: spacing.small,
        }}
      >
        <View
          style={{
            height: 45,
            width: 45,
            backgroundColor: "blue",
            borderRadius: 45 / 2,
          }}
        >
          <Image
            source={require("@assets/image/naufal.jpg")}
            style={{ width: "100%", height: "100%", borderRadius: 45 / 2 }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <TextComponents
            text="Welcome Back,"
            fontSize={12}
            color={color.grey}
          />
          <TextComponents text="Naufal Ahnaf" fontSize={15} type="medium" />
        </View>
        <Icons.menu width={30} height={30} />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          paddingVertical: spacing.normal,
        }}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <TextComponents text="Your balance Is" color={color.purple} />
          <TextComponents
            text="$ 100,00"
            color={color.textual}
            type="bold"
            fontSize={42}
          />
          <TextComponents text="Today 14 Sep 2022" color={color.grey} />
        </View>

        <View
          style={{
            width: "80%",
            height: "40%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("@assets/image/card.png")}
            resizeMode="stretch"
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      </View>

      <BlurView
        intensity={100}
        tint="light"
        style={{
          width: "100%",
          height: "45%",
          position: "absolute",
          backgroundColor: "#FFFFFFCC",
          bottom: 0,
        }}
      >
        <View
          style={{
            paddingHorizontal: spacing.normal,
            paddingTop: spacing.normal,
          }}
        >
          <TextComponents text="Transactions" type="bold" fontSize={18} />
        </View>
        <FlatList
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, paddingHorizontal: spacing.normal }}
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
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  marginBottom: spacing.small,
                  alignItems: "center",
                  paddingVertical: spacing.small,
                  flexDirection: "row",
                  gap: spacing.normal,
                }}
              >
                <View
                  style={{
                    height: 45,
                    width: 45,
                    backgroundColor: color.white,
                    borderRadius: 45 / 2,
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
                  }}
                >
                  {item === "Netflix" ? (
                    <Icons.netflix width={20} height={20} />
                  ) : item === "Amazon" ? (
                    <Icons.aws width={20} height={20} />
                  ) : (
                    <Icons.vercel width={20} height={20} />
                  )}
                </View>
                <View style={{ flex: 1 }}>
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
                <View style={{ alignItems: "flex-end" }}>
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
            );
          }}
          keyExtractor={(_, index) => index.toString()}
        />
      </BlurView>
    </View>
  );
}
