import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { colors, categories } from '../Constant';

const CategoriesList = () => {
    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    categories.map((category, index) => {
                        return (
                            <View 
                            style={{
                                backgroundColor: colors.COLOR_PRIMARY, 
                                marginRight: 36,
                                borderRadius: 8,
                                paddingHorizontal: 16,
                                paddingVertical: 16,
                                shadowColor:"#000",
                                shadowOffset: {width: 0, height: 4},
                                shadowOpacity: 0.1,
                                shadowRadius: 7,
                                marginVertical: 16
                                }}>
                                <Text style={{color: colors.COLOR_LIGHT, fontSize: 18, fontWeight: "500"}}>{category.category}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default CategoriesList;
