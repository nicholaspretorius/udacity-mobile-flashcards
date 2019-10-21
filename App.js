import React from "react";
import { View } from "react-native";
import { createAppContainer } from "react-navigation";

import Stacks from "./components/Stacks";

import UMFStatusBar from "./components/StatusBar";

const Navigation = createAppContainer(Stacks);

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <UMFStatusBar backgroundColor="black" barStyle="light-content" />
      <Navigation />
    </View>
  );
}
