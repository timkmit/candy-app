import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import GoodsListScreen from '../screens/GoodsListScreen';
import GoodDetailsScreen from '../screens/GoodDetailsScreen';

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="welcome" component={WelcomeScreen} />
                <Stack.Screen name="goodsList" component={GoodsListScreen} />
                <Stack.Screen name="goodDetail" component={GoodDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator

const styles = StyleSheet.create({})



