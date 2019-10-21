import { createStackNavigator } from "react-navigation-stack";

import Tabs from "./Tabs";
import Deck from "./../views/Deck";

const Stacks = createStackNavigator(
  {
    Decks: Tabs,
    Deck: Deck
  },
  {
    initialRouteName: "Decks"
  }
);

export default Stacks;
