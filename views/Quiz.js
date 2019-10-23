import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import HeaderStyle from "./../components/HeaderStyle";

class Quiz extends Component {
  state = {};

  static navigationOptions = ({ navigation }) => {
    const title = navigation.getParam("title");
    const style = HeaderStyle(`${title} Quiz`);
    return style;
  };

  render() {
    const { deck } = this.props;
    const { questions } = deck;
    return (
      <View>
        {questions.map(question => (
          <View key={question.question}>
            <Text>{question.question}</Text>
            <Text>{question.answer}</Text>
          </View>
        ))}
      </View>
    );
  }
}

function mapStateToProps(decks, { navigation }) {
  const { title } = navigation.state.params;
  return {
    deck: decks[title]
  };
}

export default connect(mapStateToProps)(Quiz);
