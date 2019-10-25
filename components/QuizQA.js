import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import {
  primary,
  secondary,
  secondaryLight,
  std,
  standout,
  standoutLight
} from "./../styles/colors";

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
        <View style={styles.container}>
          <Text>
            Progress: {i}/{questionCount}
          </Text>
          {!displayAnswer && <Text style={deckTitle}>{question.question}</Text>}
          {displayAnswer && <Text style={deckTitle}>{question.answer}</Text>}
          <TouchableOpacity onPress={this.setDisplayAnswer} style={styles.btnLink}>
            {!displayAnswer && <Text style={btnLinkText}>View Answer</Text>}
            {displayAnswer && <Text style={btnLinkText}>View Question</Text>}
          </TouchableOpacity>
          <TouchableOpacity onPress={this.correct} style={styles.btn}>
            <Text style={styles.btnText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnAlt} onPress={this.incorrect}>
            <Text style={styles.btnText}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return <View />;
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  deckTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: primary,
    marginBottom: 10,
    marginTop: 25
  },
  cardTitle: {
    fontSize: 15,
    color: secondary
  },
  input: {
    borderColor: secondaryLight,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  btn: {
    borderWidth: 1,
    borderColor: standoutLight,
    backgroundColor: standout,
    padding: 15,
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5
  },
  btnText: {
    color: std,
    fontSize: 20,
    textAlign: "center"
  },
  btnAlt: {
    borderWidth: 1,
    borderColor: secondaryLight,
    backgroundColor: secondary,
    padding: 15,
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5
  },
  btnLink: {
    padding: 15,
    marginTop: 25,
    textAlign: "center"
  },
  btnLinkText: {
    color: standout
  }
});

function mapStateToProps(decks, { deck }) {
  return {
    questionCount: decks[deck].questions.length
  };
}

export default connect(mapStateToProps)(QuizQA);
