import { createStackNavigator } from "react-navigation-stack";

import Tabs from "./Tabs";
import Deck from "./../views/Deck";
import AddCard from "./AddCard";
import Quiz from "./Quiz";

const Stacks = createStackNavigator(
  {
    Decks: {
      screen: Tabs
    },
    Deck: {
      screen: Deck,
      path: "Deck"
    },
    AddCard: {
      screen: AddCard,
      path: "AddCard"
    },
    Quiz: {
      screen: Quiz,
      path: "Quiz"
    }
  },
  {
    initialRouteName: "Decks"
  }
);

export default Stacks;
