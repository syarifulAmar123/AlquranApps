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
  Button,
} from 'react-native';
import {back} from '../../assets';
import Sound from 'react-native-sound';

const DetailSurah = ({route, item, navigation}) => {
  const {SSurahNumber} = route?.params;
  const [listAyat, setListAyat] = useState([]);
  const [currentSound, setCurrentSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const GetApiAyah = () => {
    return fetch(SSurahNumber)
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
    return () => {
      if (currentSound) {
        currentSound.release();
      }
    };
  }, []);

  const playAudio = audioUrl => {
    if (currentSound) {
      currentSound.stop(() => {
        currentSound.release();
      });
    }

    const sound = new Sound(audioUrl, null, error => {
      if (error) {
        console.error('Failed to load sound', error);
        return;
      }

      setCurrentSound(sound);

      sound.play(success => {
        if (success) {
          setIsPlaying(false);
        }
      });

      setIsPlaying(true);
    });
  };

  const toggleAudio = audioUrl => {
    if (isPlaying) {
      currentSound.pause(() => {
        setIsPlaying(false);
      });
    } else {
      playAudio(audioUrl);
    }
  };

  const renderItem = ({item}) => {
    const audioUrl = item.audio.primary;
    return (
      <View style={{flex: 1, margin: 20, padding: 10, paddingVertical: 30}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 30,
            height: 30,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: '#b0764c',
            marginBottom: 35,
          }}>
          <Text style={{color: '#79b651', fontSize: 14}}>
            {item.number.inSurah}
          </Text>
        </View>
        <Text
          style={{
            color: 'white',
            fontSize: 21,
            color: '#b0764c',
          }}>
          {item.text.arab}
        </Text>
        <Text style={{color: '#79b651', marginTop: 30}}>
          {item.text.transliteration.en}
        </Text>
        <Text style={{color: 'white', marginTop: 10, marginBottom: 30}}>
          {item.translation.id}
        </Text>
        <TouchableOpacity
          style={{
            width: 100,
            height: 40,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#22a6b3',
            marginLeft: 250,
          }}
          onPress={() => toggleAudio(audioUrl)}
          activeOpacity={0.7}>
          <Text style={{color: 'white', fontSize: 14, fontWeight: '600'}}>
            {isPlaying ? 'Jeda Ayat' : 'Putar Ayat'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#141f1d'} />
      <View style={{width: '100%', height: 80, flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.goback()}>
          <Image
            source={back}
            style={{
              width: 30,
              height: 30,
              marginLeft: 10,
              marginTop: 40,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{color: 'white', marginTop: 40, fontSize: 18, marginLeft: 10}}>
          Al-Qur'an Indonesia
        </Text>
      </View>
      <FlatList
        data={listAyat}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        style={{marginTop: 10}}
        showsVerticalScrollIndicator={false}
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
