import React from "react";
import { View } from "react-native";
import ImageDetail from "./ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Charmander" imageSource= {require("../../assets/charmander.jpg")} />
            <ImageDetail title="Mew"  imageSource= {require("../../assets/mew.png")} />
            <ImageDetail title="Charizard"  imageSource= {require("../../assets/charizard.jpg")} />
        </View>
    );
}

export default ImageScreen;