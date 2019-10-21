import React, { Component } from "react";
import { View, Text } from "react-native";
import Hello from "./../components/Hello";

class Decks extends Component {
  state = {};
  render() {
    return (
      <View>
        <Text>Decks: List</Text>
        <Hello />
      </View>
    );
  }
}

export default Decks;
