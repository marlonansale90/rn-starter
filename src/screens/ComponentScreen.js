import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentScreen = () => {
    return <Text style={styles.textStyle}>This is a component </Text>;
};

const styles = StyleSheet.create({
    textStyle: {
        fontStyle: {
            fontSize: 30,
        }
    }
});

export default ComponentScreen;