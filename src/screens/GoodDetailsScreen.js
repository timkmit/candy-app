import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, Image, Pressable, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const GoodDetailsScreen = ({navigation, route}) => {

    const {item} = route.params

    return (
        <ScrollView vertical showsVerticalScrollIndicator={false}>
            <View style= {{backgroundColor: "pink", flex: 1}}>
                <SafeAreaView style={{flexDirection: "row", marginHorizontal: 16}}>
                    <Pressable style={{flex: 1}} onPress={()=> navigation.goBack()}>
                        <FontAwesome name={"arrow-circle-left"} size={28} color="white">

                        </FontAwesome>
                    </Pressable>
                </SafeAreaView>
                <View 
                style={{
                    backgroundColor: "white",
                    flex: 1,
                    marginTop: 240,
                    borderTopRightRadius: 60,
                    borderTopLeftRadius: 60,
                    alignItems: "center",
                    paddingHorizontal: 16,
                    paddingBottom: 150
                }}>


                    <View 
                    style={{
                        
                        height: 300,
                        width: 300,
                        position: "absolute",
                        top: -150
                    }}>
                        <Image 
                        source={item.item.image}
                        style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: "contain"
                        }}
                        />

                    </View>


                    <Text
                    style={{
                        marginTop: 160,
                        fontSize: 28,
                        fontWeight: 700
                    }}
                    >{item.item.name}</Text>
                    <Text
                    style={{
                        fontSize: 20,
                        marginVertical: 16
                    }}
                    >{item.item.description}</Text>
{/*BLOCKS*/}                    
                    <View
                    style={{
                        flexDirection: "row"
                    }}>
                        <View
                        style={{
                            
                            paddingHorizontal: 16,
                            borderRadius: 8,
                            paddingVertical: 26,
                            alignItems: "center",
                            shadowColor:"#000",
                            shadowOffset: {width: 0, height: 4},
                            shadowOpacity: 0.2,
                            shadowRadius: 7,
                        }}>
                            <FontAwesome name={"child"} size={28} color="pink" style={{paddingBottom: 16}}/>
                            <Text
                            style={{
                                fontSize: 20
                            }}
                            >{item.item.child}</Text>
                            <Text
                            style={{
                                fontSize: 20
                            }}
                            >детям</Text>
                        </View>

                        <View
                        style={{
                            
                            paddingHorizontal: 16,
                            borderRadius: 8,
                            paddingVertical: 26,
                            alignItems: "center",
                            shadowColor:"#000",
                            shadowOffset: {width: 0, height: 4},
                            shadowOpacity: 0.2,
                            shadowRadius: 7,
                        }}>
                            <FontAwesome name={"cutlery"} size={28} color="pink" style={{paddingBottom: 16}}/>
                            <Text
                            style={{
                                fontSize: 20
                            }}
                            >{item.item.kcal}</Text>
                            <Text
                            style={{
                                fontSize: 20
                            }}
                            >калорий</Text>
                        </View>

                        <View
                        style={{
                            
                            paddingHorizontal: 16,
                            borderRadius: 8,
                            paddingVertical: 26,
                            alignItems: "center",
                            shadowColor:"#000",
                            shadowOffset: {width: 0, height: 4},
                            shadowOpacity: 0.2,
                            shadowRadius: 7,
                        }}>
                            <FontAwesome name={"rub"} size={28} color="pink" style={{paddingBottom: 16}}/>
                            <Text
                            style={{
                                fontSize: 20
                            }}
                            >Всего</Text>
                            <Text
                            style={{
                                fontSize: 20
                            }}
                            >{item.item.kcal + 'р'}</Text>
                        </View>

                        
                    </View>

                    <View
                        style={{
                            alignSelf: "flex-start", 
                            marginVertical: 22
                        }}>
                            <Text
                            style={{
                                fontSize: 22,
                                fontWeight: "600",

                            }}>
                                Состав
                            </Text>
                            {
                                item.item.ingredients.map((ingredient, index) => {
                                    return (
                                        <View
                                            key={index} 
                                            style={{
                                            flexDirection: "row",
                                            alignItems: "center"
                                        }}>
                                            <View
                                            style={{
                                                backgroundColor: "orange",
                                                height: 10,
                                                width: 10,
                                                borderRadius: 5
                                            }}>
                                                
                                            </View>
                                            <Text
                                                style={{
                                                    fontSize: 18,
                                                    marginLeft: 6
                                                }}>
                                                    {ingredient}
                                                </Text>
                                        </View>
                                    )
                                })
                            }

                        </View>
                    
                </View>
                
                
            </View>
            </ScrollView>
        
    );
}

const styles = StyleSheet.create({})

export default GoodDetailsScreen;
