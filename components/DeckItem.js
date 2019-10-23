import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";

class DeckItem extends Component {
  state = {};
  render() {
    const { deck } = this.props;
    const { questions, title } = deck;

    return (
      <TouchableOpacity>
        <Text>{title}</Text>
        <Text>
          {questions.length > 1 || questions.length < 1
            ? `${questions.length} Cards`
            : `${questions.length} Card`}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default DeckItem;
