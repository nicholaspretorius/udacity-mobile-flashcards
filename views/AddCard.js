import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard
} from "react-native";
import { connect } from "react-redux";

import { addCard } from "./../actions/decks";
import HeaderStyle from "./../components/HeaderStyle";
import { primary, secondary, std } from "./../utils/colors";

class AddCard extends Component {
  state = {
    question: "",
    answer: ""
  };

  static navigationOptions = ({ navigation }) => {
    const title = navigation.getParam("title");
    const style = HeaderStyle(`Add Card to ${title}`);
    return style;
  };

  onBlur = () => {
    Keyboard.dismiss();
  };

  addCard = () => {
    // TODO: Add validation for empty fields...
    const { dispatch } = this.props;
    const title = this.props.navigation.getParam("title");
    console.log("Title: ", title);
    const { question, answer } = this.state;
    dispatch(addCard({ question, answer, name: title }));
    Keyboard.dismiss();
    this.setState({ question: "", answer: "" });
    this.props.navigation.goBack();
  };

  render() {
    const { question, answer } = this.state;
    return (
      <ScrollView>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter question"
            value={question}
            onChangeText={question => this.setState({ question })}
            onBlur={this.onBlur}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Enter answer"
            value={answer}
            onChangeText={answer => this.setState({ answer })}
            onBlur={this.onBlur}
          ></TextInput>
          <TouchableOpacity onPress={this.addCard} style={styles.btn}>
            <Text style={styles.btnText}>Create Card</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderColor: primary,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20
  },
  btn: {
    borderWidth: 1,
    borderColor: primary,
    backgroundColor: secondary,
    padding: 15,
    margin: 5
  },
  btnText: {
    color: std,
    fontSize: 20,
    textAlign: "center"
  }
});

export default connect()(AddCard);
