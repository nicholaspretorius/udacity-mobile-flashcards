import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, Keyboard, StyleSheet } from "react-native";

import Header from "./../components/Header";
import { primary, secondary, std } from "./../utils/colors";

class AddDeck extends Component {
  state = {
    title: ""
  };

  handleChange = title => {
    this.setState({ title });
  };

  addDeck = () => {
    console.log("Add deck: ", this.state);
  };

  render() {
    const { title } = this.state;
    return (
      <View>
        <Header title="Add Deck"></Header>
        <TextInput
          style={styles.input}
          placeholder="Enter deck title"
          value={title}
          onChangeText={this.handleChange}
          onBlur={Keyboard.dismiss}
        ></TextInput>
        <TouchableOpacity onPress={this.addDeck} style={styles.btn}>
          <Text style={styles.btnText}>Create Deck</Text>
        </TouchableOpacity>
      </View>
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

export default AddDeck;
