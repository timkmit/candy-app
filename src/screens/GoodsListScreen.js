
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import HeaderScreen from '../components/Header';
import SearchFilter from '../components/SearchFilter';

const GoodsListScreen = () => {
    return (
        <SafeAreaView style={{flex: 1, marginHorizontal: 16}}>
            <HeaderScreen headerText={"Привет!"} headerIcon={"bell-o"}/>
            <SearchFilter icon="search" placeholder={"Введите название изделия"}/>
        </SafeAreaView>
            
        
    );
}
export default GoodsListScreen;

const styles = StyleSheet.create({})


