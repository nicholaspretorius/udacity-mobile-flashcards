import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";
import { connect } from "react-redux";

import { handleInitialData } from "./../actions/decks";
import DeckItem from "./../components/DeckItem";
import Header from "./../components/Header";

class Decks extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleInitialData());
  }

  handleNav = () => {
    this.props.navigation.navigate("Deck");
  };

  render() {
    const { decks } = this.props;
    return (
      <ScrollView>
        <View>
          <Header title={"Mobile Flashcards"} />

          {Object.keys(decks).map(deck => (
            <View key={deck}>
              <DeckItem deck={decks[deck]} toDeck={this.handleNav} />
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(Decks);
