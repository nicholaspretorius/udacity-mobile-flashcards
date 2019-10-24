import React from "react";
import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./reducers/decks";
import middleware from "./middleware";

import Stacks from "./components/Stacks";
import UMFStatusBar from "./components/StatusBar";
import { setLocalNotification } from "./utils/notifications";

const store = createStore(reducer, middleware);
const Navigation = createAppContainer(Stacks);

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <UMFStatusBar backgroundColor="black" barStyle="light-content" />
          <Navigation />
        </View>
      </Provider>
    );
  }
}
