import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, Image, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const GoodDetailsScreen = ({navigation, route}) => {

    const {item} = route.params

    return (
        
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
                    paddingHorizontal: 16
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
                    
                </View>
                
            </View>
        
        
    );
}

const styles = StyleSheet.create({})

export default GoodDetailsScreen;
