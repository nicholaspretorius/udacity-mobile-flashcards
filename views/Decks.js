import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import { handleInitialData } from "./../actions/decks";

class Decks extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleInitialData());
  }

  render() {
    const { decks } = this.props;
    return (
      <View>
        <Text>Decks: List</Text>
        <Text>Decks: {JSON.stringify(decks)}</Text>
      </View>
    );
  }
}

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(Decks);
