import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, StatusBar} from 'react-native';
import {Ibackground, masjid} from '../../assets';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 4000);
  });
  return (
    <View style={stylis.conatiner}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#141f1d'} />
      <Image
        source={{
          uri: 'https://tse2.mm.bing.net/th?id=OIP.jCbMNaDx3k4hcEtrR8LdkgAAAA&pid=Api&P=0&h=180',
        }}
        style={stylis.mosque}
      />
      <Text style={stylis.content}>Al-Qur'an</Text>
      <Text style={stylis.content2}>Apps</Text>
      <View style={{marginTop: 200}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            color: 'white',
            fontFamily: 'Anton-Regular',
          }}>
          Decoration By :{' '}
          <Text style={{fontSize: 18, color: '#dcac1f'}}>
            {' '}
            Mohammad Syariful Amar
          </Text>
        </Text>
      </View>
    </View>
  );
};

const stylis = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141f1d',
  },
  mosque: {
    width: 200,
    height: 200,
    borderRadius: 100,
    // marginTop: -200,
  },
  content: {
    fontFamily: 'Anton-Regular',
    fontSize: 70,
    color: '#cc9068',
    marginRight: 20,
    marginTop: 50,
  },
  content2: {
    fontFamily: 'Anton-Regular',
    fontSize: 50,
    color: '#b0764c',
    marginTop: 10,
    marginLeft: 150,
  },
});

export default SplashScreen;
