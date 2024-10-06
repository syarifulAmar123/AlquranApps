import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View , Text , Image  , StyleSheet, StatusBar} from "react-native";
import { Ibackground, masjid } from "../../assets";

const SplashScreen =()=>{
    const navigation = useNavigation()
    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('Home')
        },4000)
    })
    return (
        <View style ={stylis.conatiner}>
            <StatusBar barStyle={'light-content'} backgroundColor={'#141f1d'}/>
            <Image source={Ibackground} style={stylis.mosque}/>
            <Text style={stylis.content}>Al-Qur'an</Text>
            <Text style={stylis.content2}>Apps</Text>
        </View>
    )
}

const stylis = StyleSheet.create({
    conatiner : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "#141f1d"
    },
    mosque :{
        width: 400,
        height : 400,
        marginTop : -300,

    },
    content: {
        fontFamily : 'Anton-Regular.ttf',
        fontSize : 70 ,
        color : "#cc9068",
        marginRight : 20,
        marginTop : -100

    },
    content2: {
        fontFamily : 'Anton-Regular.ttf',
        fontSize :50 ,
        color : "#b0764c",
        marginTop : 20 , 
        marginLeft :  150
    }
})

export default SplashScreen