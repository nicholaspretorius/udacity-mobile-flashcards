import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import HeaderStyle from "./../components/HeaderStyle";
import { removeDeck } from "./../actions/decks";

class Deck extends Component {
  state = {};

  static navigationOptions = ({ navigation }) => {
    const title = navigation.getParam("deckId");
    const style = HeaderStyle(title);
    return style;
  };

  handleDeleteDeck = () => {
    const { deck, dispatch, navigation } = this.props;
    const { title } = deck;
    dispatch(removeDeck(title));
    navigation.navigation("Decks");
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
        <TouchableOpacity onPress={() => this.props.navigation.navigate("AddCard", { title })}>
          <Text>Add Card</Text>
        </TouchableOpacity>

        {questions.length > 0 && (
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Quiz", { title })}>
            <Text>Start Quiz</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={this.handleDeleteDeck}>
          <Text>Delete Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(decks, { navigation }) {
  const { deckId } = navigation.state.params;
  console.log("DeckId: ", deckId);
  console.log("Decks: ", decks);
  return {
    deck: decks[deckId]
  };
}

export default connect(mapStateToProps)(Deck);
