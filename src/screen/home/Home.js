import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View , Text , Image, StyleSheet, StatusBar, FlatList, TouchableOpacity } from "react-native";
import { back } from "../../assets";

const Home =()=>{
  const navigation =useNavigation()
  const [data,setData]=useState([

  ])
  const apiAsli = 'https://api.quran.gading.dev/surah'
  const MovvingScreen = (surahNumber) => {
    navigation.navigate('DetailSurah', { surahNumber: `${apiAsli}/${surahNumber}` });
  };

    const GetApiAlquran =  () => {
        return fetch('https://api.quran.gading.dev/surah')
          .then(response => response.json())
          .then(json => {
            setData(json.data);
          })
          .catch(error => {
            console.error(error);
          });
      };

      
      useEffect(()=>{
        GetApiAlquran()
      },[])

      

      const renderItem =({item})=>{
        return(
         <TouchableOpacity style ={{borderWidth : 1 , borderRadius : 10 , borderColor :'#b0764c',margin : 10 , padding : 10}} onPress={()=>MovvingScreen(item.number)}>
            <View style ={{marginRight : -2 , marginLeft : 5}}>
            <View style ={{flexDirection : "row" , marginTop : 20}}>
              <View style ={{justifyContent : 'center' , alignItems : "center" , width : 40 , height : 40 , borderRadius: 20, borderWidth : 1 , borderColor :'#b0764c' , marginRight : 10  }}>
              <Text style ={{color : 'white' , fontSize : 16}}>{item.number}</Text>
              </View>
                <View>
              <Text style ={{color : 'white' , fontSize : 16 , }}>{item.name.transliteration.id}</Text>
              <Text style ={{color : '#b0764c' , fontSize : 14  , marginTop : 5}}>{item.revelation.id} | {item.numberOfVerses} ayat</Text>
                </View>
            </View>
            </View>
                <Text style ={{color : "white" , fontSize : 21  , marginLeft : 40 , fontFamily : 'BFantezy' }}>{item.name.long}</Text>
         </TouchableOpacity>
        )
      }
    return (
        <View style ={styleMy.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={'#141c1c'}/>
              <View style ={{width : '100%' , height : 50 , flexDirection : 'row'}}>
                  <Image source={back} style ={{width : 30 , height :30  , marginLeft : 10 ,marginTop : 20}}></Image>
                  <Text style ={{color : 'white' , marginTop : 25 , fontSize : 18 , marginLeft : 10}}>Al-Qur'an Indonesia</Text>
              </View>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item,index)=>index.toString()}
              style ={{marginTop : 30}}
            />
        </View>
    )
}

const styleMy =StyleSheet.create({
  container : {
    backgroundColor : '#141f1d',
    flex : 1
  },
  nameArabic : {
    color : 'white' ,
    fontSize  : 18,
    fontFamily : 'Amiri-Regular',
    alignItems : 'flex-end',
    marginLeft : 70
  }
})


export default Home