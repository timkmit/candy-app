import React from 'react';
import { FlatList, StyleSheet, View, Text, Image } from 'react-native';
import { colors, goodsList } from '../Constant';

const GoodCard = () => {
    return (
        <View>
            <FlatList 
            showsVerticalScrollIndicator={false}
            data={goodsList} 
            renderItem={(item)=> 
                <View 
                style={{
                    backgroundColor: colors.COLOR_LIGHT,
                    shadowColor:"#000",
                    shadowOffset: {width: 0, height: 4},
                    shadowOpacity: 0.1,
                    shadowRadius: 7,
                    marginVertical: 16,
                    borderRadius: 16,
                    alignItems: "center",
                    paddingHorizontal: 8,
                    paddingVertical: 26
                    
                    }}
                    
                    >
                        <Image source={item.item.image}
                        style={{
                            width: 162,
                            height: 150,
                            resizeMode: "center"
                        }}
                        />
                        <Text>{item.item.name}</Text>
                </View>
            }
            numColumns={2}
            columnWrapperStyle={{
                justifyContent: "space-between"
            }}
            
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default GoodCard;
