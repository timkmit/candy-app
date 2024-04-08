import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity} from 'react-native'
import react from 'react'

const WelcomeScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: "center"}}>
            
            
            <Image source={require("../../assets/images/welcome1.png")} style={{ width: '100%', height: 450, marginTop: 120}}/>

            <Text 
            style={{color:"pink",
            fontSize: 22,
            fontWeight: "bold",
            marginTop: 22,
            fontFamily: "Apple SD Gothic Neo"
            }}>
                Более 1000 позиций
            </Text>
            <Text
            style={{
                fontSize: 40,
                fontWeight: "bold",
                marginTop: 44,
                paddingBottom: 18,
                fontFamily: "AppleSDGothicNeo-Bold"
            }}>
                Выбирайте лучшее
            </Text>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("goodsList")}
            style={{backgroundColor: "pink", 
            borderRadius: 18,
            paddingVertical: 18,
            width: "80%",
            alignItems:  "center",
            
        }}>
                <Text style={{ fontSize: 18, color: "white", fontWeight: "bold", fontFamily: "AppleSDGothicNeo-Bold"}}>Продолжить</Text>
            </TouchableOpacity>
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({})