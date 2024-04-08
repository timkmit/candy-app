import React from 'react';
import { Text, View } from 'react-native';

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
            <Text>search</Text>
        </View>
    );
}

export default SearchFilter;
