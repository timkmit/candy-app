import React from 'react';
import { FlatList, StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { colors, goodsList } from '../Constant';

const GoodCard = ({searchValue}) => {
    const navigation = useNavigation()

    const filteredGoods = goodsList.filter(item => {
        return item.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    return (
        <View>
            <FlatList 
             contentContainerStyle={{ paddingBottom: 10 }}
            showsVerticalScrollIndicator={false}
            data={filteredGoods} 
            renderItem={(item)=> 
                <Pressable 
                onPress={()=> navigation.navigate("goodDetail", {item: item})}
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
                            height: 160,
                            resizeMode: "center"
                        }}
                        />
                        <Text>{item.item.name}</Text>
                        <View>
                        <Text>{item.item.price + 'р'} </Text>
                        </View>
                </Pressable>
                
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
