import React, { useState } from "react";
import { View, Button, StyleSheet, Text } from "react-native";

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Text>Counter Count: {counter}</Text>
            <Button
            title="Increase"
            onPress={ () => {
                setCounter(counter + 1);
            }}
            />
        </View>
    );
}

const style = StyleSheet.create({});

export default CounterScreen;