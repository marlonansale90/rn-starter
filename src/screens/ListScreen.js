import React from "react";
import { View, Text, StyleSheet} from "react-native"
import { FlatList } from "react-native-gesture-handler";

const ListScreen = () => {
    const pokemon = [
        { name: "Charmander", key:"1"}, 
        {name: "Abra", key:"2"}, 
        {name: "Balbasuar", key:"3"}, 
        {name: "Squirtle", key:"4"}
    ];

    return (
        <FlatList 
        data={pokemon} 
        renderItem={({ item }) => {
            return <Text style={styles.textStyle}>{item.name}</Text>;
        }} 
        />
    );
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 10,
        marginHorizontal: 10
    }
});

export default ListScreen;