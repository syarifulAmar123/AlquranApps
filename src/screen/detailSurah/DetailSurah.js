import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {back} from '../../assets';

const DetailSurah = ({route, item, navigation}) => {
  const {surahNumber} = route?.params;
  const {apiAsli} = route?.params;
  console.log('ayaht persurah : ', apiAsli);
  const [listAyat, setListAyat] = useState([]);

  const GetApiAyah = () => {
    return fetch(surahNumber)
      .then(response => response.json())
      .then(json => {
        setListAyat(json.data.verses);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    GetApiAyah();
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={{flex: 1, margin: 20, padding: 10}}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            color: '#b0764c',
          }}>
          {item.text.arab}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#141f1d'} />
      <View style={{width: '100%', height: 50, flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={back}
            style={{
              width: 30,
              height: 30,
              marginLeft: 10,
              marginTop: 20,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{color: 'white', marginTop: 25, fontSize: 18, marginLeft: 10}}>
          Al-Qur'an Indonesia
        </Text>
      </View>
      <FlatList
        data={listAyat}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        style={{marginTop: 10}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141f1d',
  },
  content: {
    fontFamily: 'Anton-Regular.ttf',
    fontSize: 70,
    color: '#cc9068',
    marginRight: 20,
    marginTop: -100,
  },
});

export default DetailSurah;
