
import React, {useState} from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import HeaderScreen from '../components/Header';
import SearchFilter from '../components/SearchFilter';
import CategoriesList from '../components/CategoriesList';
import GoodCard from '../components/GoodCard';

const GoodsListScreen = () => {
    const [searchValue, setSearchValue] = useState('');
    const handleSearch = (value) => {
        setSearchValue(value);
    }

    return (
        <SafeAreaView style={{flex: 1, marginHorizontal: 16}}>
            <HeaderScreen headerText={"Рады видеть тебя!"} headerIcon={"bell-o"}/>
            <SearchFilter icon="search" placeholder={"Торт, чизкейк, пирожок, чай..."} onSearch={handleSearch}/>

            <View style={{marginTop: 22}}>
                <Text style={{fontSize: 22, fontWeight: "bold"}}>
                    Категории
                </Text>
                <CategoriesList/>
            </View>

            <View style={{marginTop: 22, flex: 1}}>
                <Text style={{fontSize: 22, fontWeight: "bold"}}>
                    Товары
                </Text>
                <GoodCard searchValue={searchValue}/>
            </View>
        </SafeAreaView>
    );
}
export default GoodsListScreen;

const styles = StyleSheet.create({})


