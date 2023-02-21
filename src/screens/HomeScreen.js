import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = props => {
  return (
    <View>
      <Text style={styles.text}>Poke Dex</Text>
      <Button 
      onPress={() => props.navigation.navigate("Components")}
      title="Go to Components"/>
      
      <TouchableOpacity
       onPress={() => props.navigation.navigate("List")}>
        <Text>Go to list Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity
       onPress={() => props.navigation.navigate("Image")}>
        <Text>Go to Image Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
       onPress={() => props.navigation.navigate("Counter")}>
        <Text>Go to Counter Screen</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 27,
  },
});

export default HomeScreen;
