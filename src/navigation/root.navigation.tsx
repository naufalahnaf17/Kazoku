import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Started from "@screens/getting-started/started";
import HomeTabs from "./home.navigation";

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Started"
    >
      <Stack.Screen name="Started" component={Started} />
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
    </Stack.Navigator>
  );
}
