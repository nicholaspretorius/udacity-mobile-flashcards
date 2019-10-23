import { createStackNavigator } from "react-navigation-stack";

import Tabs from "./Tabs";
import Deck from "./../views/Deck";

const Stacks = createStackNavigator(
  {
    Decks: {
      screen: Tabs
    },
    Deck: {
      screen: Deck,
      path: "Deck"
    }
  },
  {
    initialRouteName: "Decks"
  }
);

export default Stacks;
