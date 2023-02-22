import React from "react";
import { View, StyleSheet } from 'react-native';
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
    return <View>
        <ColorCounter color="Red"/>
        <ColorCounter color="Blue"/>
        <ColorCounter color="Green"/>
    </View>
};

export default SquareScreen;