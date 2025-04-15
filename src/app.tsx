import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Wrapper from "@wrapper";
import RootStack from "./navigation/root.navigation";

export default function App() {
  return (
    <NavigationContainer>
      <Wrapper>
        <RootStack />
      </Wrapper>
    </NavigationContainer>
  );
}
