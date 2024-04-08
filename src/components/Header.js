import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import SearchFilter from './SearchFilter';

const HeaderScreen = ({headerText, headerIcon}) => {
    return (
        <View style={{flexDirection: "row"}}>
            <Text style={{flex: 1, fontSize: 22, fontWeight: "700"}}>{headerText}</Text>
            <FontAwesome name={headerIcon} size={25} color="pink"/>
            
        </View>
    );
}
export default HeaderScreen;

const styles = StyleSheet.create({})


