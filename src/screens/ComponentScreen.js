import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
    return (
    <View> 
        <Text style={styles.textStyle}>This is a components screen</Text> 
        <Text> Hi there!</Text>
    </View>);
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40,
    }
});

export default ComponentScreen;