import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import HeaderStyle from "./../components/HeaderStyle";
import QuizQA from "./../components/QuizQA";

class Quiz extends Component {
  state = {
    current: 1,
    count: 0,
    correct: [],
    incorrect: []
  };

  static navigationOptions = ({ navigation }) => {
    const title = navigation.getParam("title");
    const style = HeaderStyle(`${title} Quiz`);
    return style;
  };

  componentDidMount() {
    const { deck } = this.props;
    this.setState({ count: deck.questions.length });
  }

  correctAnswer = question => {
    this.setState({
      current: this.state.current + 1,
      correct: this.state.correct.concat([question])
    });
  };

  incorrectAnswer = question => {
    this.setState({
      current: this.state.current + 1,
      incorrect: this.state.incorrect.concat([question])
    });
  };

  handleAnswer = (answer, question) => {
    if (answer === true) {
      this.correctAnswer(question.question);
    } else {
      this.incorrectAnswer(question.question);
    }
  };

  restartQuiz = () => {
    const empty = [];
    this.setState({ current: 1, count: 0, correct: empty, incorrect: empty });
  };

  toDeck = () => {
    this.props.navigation.goBack();
  };

  render() {
    const { deck } = this.props;
    const { questions } = deck;
    const { current, correct } = this.state;
    return (
      <View>
        {questions.map((question, index) => (
          <QuizQA
            key={question.question}
            deck={deck.title}
            question={question}
            index={index}
            current={current}
            onAnswer={this.handleAnswer}
          />
        ))}
        {current > questions.length && (
          <View>
            <Text>Quiz Complete!</Text>
            <Text>
              You got {correct.length} out of {questions.length} correct!
            </Text>
            <TouchableOpacity onPress={this.restartQuiz}>
              <Text>Restart Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.toDeck}>
              <Text>Back to Deck</Text>
            </TouchableOpacity>
          </View>
        )}
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
