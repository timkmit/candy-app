
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import HeaderScreen from '../components/Header';
import SearchFilter from '../components/SearchFilter';
import CategoriesList from '../components/CategoriesList';

const GoodsListScreen = () => {
    return (
        <SafeAreaView style={{flex: 1, marginHorizontal: 16}}>
            <HeaderScreen headerText={"Привет!"} headerIcon={"bell-o"}/>
            <SearchFilter icon="search" placeholder={"Торт, чизкейк, пирожок, чай..."}/>

            <View>
                <Text style={{fontSize: 22, fontWeight: "bold"}}>
                    Категории
                </Text>
                <CategoriesList/>
            </View>
        </SafeAreaView>
            
        
    );
}
export default GoodsListScreen;

const styles = StyleSheet.create({})


