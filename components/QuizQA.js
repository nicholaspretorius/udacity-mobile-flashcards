import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

class QuizQA extends Component {
  state = {
    displayAnswer: false
  };

  setDisplayAnswer = () => {
    const { displayAnswer } = this.state;
    const dA = !displayAnswer;
    this.setState({ displayAnswer: dA });
  };

  correct = () => {
    const { question } = this.props;
    this.props.onAnswer(true, question.question);
  };

  incorrect = () => {
    const { question } = this.props;
    this.props.onAnswer(false, question.question);
  };

  render() {
    const { question, index, questionCount, current } = this.props;
    const { displayAnswer } = this.state;
    const i = index + 1;

    if (i === current) {
      return (
        <View>
          <Text>
            Progress: {i}/{questionCount}
          </Text>
          {!displayAnswer && <Text>{question.question}</Text>}
          {displayAnswer && <Text>{question.answer}</Text>}
          <TouchableOpacity onPress={this.setDisplayAnswer}>
            {!displayAnswer && <Text>View Answer</Text>}
            {displayAnswer && <Text>View Question</Text>}
          </TouchableOpacity>
          <TouchableOpacity onPress={this.correct}>
            <Text>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.incorrect}>
            <Text>Incorrect</Text>
          </TouchableOpacity>
        </View>
      );
    }

    // if (current > questionCount) {
    //   return <Text>Quiz Complete!</Text>;
    // }

    return <View />;
  }
}

function mapStateToProps(decks, { deck }) {
  return {
    questionCount: decks[deck].questions.length
  };
}

export default connect(mapStateToProps)(QuizQA);
