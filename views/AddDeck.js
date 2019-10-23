import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";

import { addDeck } from "./../actions/decks";

import Header from "./../components/Header";
import { primary, secondary, std } from "./../utils/colors";

class AddDeck extends Component {
  state = {
    title: ""
  };

  handleChange = title => {
    this.setState({ title });
  };

  onBlur = () => {
    Keyboard.dismiss();
  };

  addDeck = () => {
    const { dispatch } = this.props;
    const title = this.state.title;
    dispatch(addDeck(this.state.title));
    Keyboard.dismiss();
    this.setState({ title: "" });
    this.toHome();
  };

  toHome = () => {
    this.props.navigation.dispatch(
      NavigationActions.back({
        key: "AddDeck"
      })
    );
  };

  render() {
    const { title } = this.state;
    return (
      <ScrollView>
        <View>
          <Header title="Add Deck"></Header>
          <TextInput
            style={styles.input}
            placeholder="Enter deck title"
            value={title}
            onChangeText={this.handleChange}
            onBlur={this.onBlur}
          ></TextInput>
          <TouchableOpacity onPress={this.addDeck} style={styles.btn}>
            <Text style={styles.btnText}>Create Deck</Text>
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

export default connect()(AddDeck);
