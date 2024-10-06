// import React, { useEffect ,useState } from "react";
// import { View , Text , StyleSheet, StatusBar , FlatLIst} from "react-native";

// const DetailSurah =({route})=>{
    
//     const {surahNumber}=route?.params
//     const [listAyat , setListAyat]=useState([])
    
//     const GetApiAyah =  () => {
//         return fetch(surahNumber)
//           .then(response => response.json())
//           .then(json => {
//             setListAyat(json.data)
//         })
//           .catch(error => {
//             console.error(error);
//           });
//       };

      
//       useEffect(()=>{
//         GetApiAyah()
//         console.log(listAyat)
//       },[])
   

//     const renderItem =({item})=>{
//         return(
//             <View style ={{flex : 1 , backgroundColor : "black"}}>
//                 <Text style ={{color : 'white' ,  fontSize : 21}}>{item}</Text>
//             </View>
//         )
//     }
//     return (
//         <View style ={stylis.conatiner}>
//             <StatusBar barStyle={'light-content'} backgroundColor={'#141f1d'}/>
//             <FlatLIst 
//                 data = {listAyat}
//                 keyExtractor = {(item , index)=>index.toString()}
//                 renderItem ={renderItem}
//                 />
//         </View>
//     )
// }

// const stylis = StyleSheet.create({
//     conatiner : {
//         flex : 1,
//         justifyContent : "center",
//         alignItems : "center",
//         backgroundColor : "#141f1d"
//     },
//     content: {
//         fontFamily : 'Anton-Regular.ttf',
//         fontSize : 70 ,
//         color : "#cc9068",
//         marginRight : 20,
//         marginTop : -100

//     }
// })

// export default DetailSurah

import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, FlatList } from "react-native";

const DetailSurah = ({ route }) => {
  const { surahNumber } = route?.params;
  const [listAyat, setListAyat] = useState([]);

  const GetApiAyah = () => {
    // const apiUrl = `https://example.com/api/ayah/${surahNumber}`; // Ubah menjadi URL yang lengkap
    return fetch(surahNumber)
      .then(response => response.json())
      .then(json => {
        setListAyat(json);
        console.log('data adata : ' , listAyat); // Pindahkan console.log ke sini
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    GetApiAyah();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <Text style={{ color: "white", fontSize: 21 }}>{item}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#141f1d"} />
      <FlatList
        data={listAyat}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#141f1d",
  },
  content: {
    fontFamily: "Anton-Regular.ttf",
    fontSize: 70,
    color: "#cc9068",
    marginRight: 20,
    marginTop: -100,
  },
});

export default DetailSurah;