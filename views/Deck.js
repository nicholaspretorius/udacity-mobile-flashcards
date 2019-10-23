import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

class Deck extends Component {
  state = {};

  static navigationOptions = ({ navigation }) => {
    const deck = navigation.getParam("deck");
    return {
      title: deck.title,
      headerStyle: {
        backgroundColor: "#000"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "normal"
      }
    };
  };

  render() {
    const { deck } = this.props;
    const { title, questions } = deck;
    return (
      <View>
        <Text>{title}</Text>
        <Text>
          {questions.length > 1 || questions.length < 1
            ? `${questions.length} Cards`
            : `${questions.length} Card`}
        </Text>
        <TouchableOpacity>
          <Text>Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Delete Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state, { navigation }) {
  const { deck } = navigation.state.params;
  console.log("DeckId: ", deck);
  return {
    deck
  };
}

export default connect(mapStateToProps)(Deck);
