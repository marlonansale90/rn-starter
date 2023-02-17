import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return <Text style={styles.text}>Poke Dex</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 27,
  },
});

export default HomeScreen;
