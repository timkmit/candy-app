import React from 'react';
import { TextInput, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchFilter = ({icon, placeholder}) => {
    return (
        <View 
        style={{
            backgroundColor: "white",
            flexDirection: "row",
            paddingVertical: 16,
            borderRadius: 8,
            paddingHorizontal: 16,
            marginVertical: 16,
            shadowColor:"#000",
            shadowOffset: {width: 0, height: 4},
            shadowOpacity: 0.1,
            shadowRadius: 7
            }}>

            <FontAwesome name={icon} size={20} color="pink"/>
            <TextInput style={{paddingLeft: 8, fontSize: 16, color:"grey"}}>{placeholder}</TextInput>
        </View>
    );
}

export default SearchFilter;
