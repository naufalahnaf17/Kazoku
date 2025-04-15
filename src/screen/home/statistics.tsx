import { View, FlatList, Image } from "react-native";
import React from "react";
import { color } from "@utils/colors";
import { spacing } from "@utils/spacing";
import TextComponents from "@components/text";
import { Icons } from "@utils/icons";
import { Bar, CartesianChart } from "victory-native";
import poppins from "@assets/fonts/Poppins-Regular.ttf";
import { useFont } from "@shopify/react-native-skia";

const DATA = [
  { day: "Mon", highTmp: 45 },
  { day: "Tue", highTmp: 20 },
  { day: "Wed", highTmp: 38 },
  { day: "Thu", highTmp: 40 },
  { day: "Fri", highTmp: 18 },
];

export default function Statistics() {
  const font = useFont(poppins, 14);

  return (
    <View style={{ flex: 1, backgroundColor: color.white }}>
      <View
        style={{
          alignItems: "center",
          padding: spacing.normal,
          flexDirection: "row",
        }}
      >
        <View style={{ width: 45 }}>
          <View
            style={{
              width: 35,
              height: 35,
              backgroundColor: color.lightgrey,
              borderRadius: 35 / 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icons.back width={30} height={30} />
          </View>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <TextComponents text="Statistics" fontSize={15} type="medium" />
        </View>
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
      </View>
      <View
        style={{
          flex: 1.5,
          paddingTop: spacing.normal,
        }}
      >
        <View style={{ flex: 1 }}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <TextComponents text="Your balance Is" color={color.purple} />
            <TextComponents
              text="$ 100,00"
              color={color.textual}
              type="bold"
              fontSize={42}
            />
          </View>

          <View style={{ flex: 1, paddingHorizontal: spacing.normal }}>
            <CartesianChart
              domainPadding={spacing.normal * 2}
              data={DATA}
              padding={{ right: spacing.normal }}
              xKey="day"
              yKeys={["highTmp"]}
              axisOptions={{
                tickCount: { x: 5, y: 1 },
                font: font,
                lineWidth: 0,
              }}
              frame={{ lineColor: "white" }}
            >
              {({ points, chartBounds }) => {
                return points.highTmp.map((point, index) => {
                  return (
                    <Bar
                      key={index}
                      barCount={points.highTmp.length}
                      points={[point]}
                      chartBounds={chartBounds}
                      animate={{ type: "spring" }}
                      roundedCorners={{ topLeft: 10, topRight: 10 }}
                      color={index === 2 ? color.purple : color.lightgrey}
                    />
                  );
                });
              }}
            </CartesianChart>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            paddingHorizontal: spacing.normal,
            paddingVertical: spacing.normal,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TextComponents text="History" type="bold" fontSize={18} />
          <View
            style={{
              width: 25,
              height: 25,
              backgroundColor: color.lightgrey,
              borderRadius: 25 / 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icons.menuHistory width={18} height={18} />
          </View>
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
      </View>
    </View>
  );
}
