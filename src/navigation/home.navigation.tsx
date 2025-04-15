import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useLinkBuilder } from "@react-navigation/native";
import Dashboard from "@screens/home/dashboard";
import Settings from "@screens/home/settings";
import Statistics from "@screens/home/statistics";
import Wallet from "@screens/home/wallet";
import { color } from "@utils/colors";
import { spacing } from "@utils/spacing";
import { StyleSheet, View } from "react-native";
import { PlatformPressable } from "@react-navigation/elements";
import { Icons } from "@utils/icons";

const Tab = createBottomTabNavigator();

function CustomTabBar({ state, descriptors, navigation }: any) {
  const { buildHref } = useLinkBuilder();

  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.name}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.pressable}
          >
            {label === "Dashboard" ? (
              <View style={styles.iconContainer}>
                {isFocused ? (
                  <Icons.dashboard width={28} height={28} />
                ) : (
                  <Icons.dashboardNon width={28} height={28} />
                )}
              </View>
            ) : label === "Statistics" ? (
              <View style={styles.iconContainer}>
                {isFocused ? (
                  <Icons.statistics width={28} height={28} />
                ) : (
                  <Icons.statisticsNon width={28} height={28} />
                )}
              </View>
            ) : label === "Wallet" ? (
              <View style={styles.iconContainer}>
                {isFocused ? (
                  <Icons.wallet width={28} height={28} />
                ) : (
                  <Icons.walletNon width={28} height={28} />
                )}
              </View>
            ) : (
              <View style={styles.iconContainer}>
                {isFocused ? (
                  <Icons.settings width={28} height={28} />
                ) : (
                  <Icons.settingsNon width={28} height={28} />
                )}
              </View>
            )}
          </PlatformPressable>
        );
      })}
    </View>
  );
}

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Statistics" component={Statistics} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: color.white,
    borderTopWidth: 0.5,
    borderTopColor: "lightgrey",
  },
  pressable: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing.normal,
  },
  iconContainer: {
    marginBottom: 2,
  },
});
