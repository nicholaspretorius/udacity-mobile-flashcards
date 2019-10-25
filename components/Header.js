import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { primary, std } from "../styles/colors";

const Header = ({ title }) => {
  return (
    <View>
      <Text style={styles.header}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: primary,
    color: std,
    fontSize: 25,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: "center"
  }
});

export default Header;
