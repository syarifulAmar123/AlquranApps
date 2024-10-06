import React from 'react';
import {View, Image, Text} from 'react-native';
import {back} from '../assets';

const Coffe = () => {
  <View style={{width: '100%', height: 50, flexDirection: 'row'}}>
    <Image
      source={back}
      style={{
        width: 30,
        height: 30,
        marginLeft: 10,
        marginTop: 20,
      }}></Image>
    <Text style={{color: 'white', marginTop: 25, fontSize: 18, marginLeft: 10}}>
      Al-Qur'an Indonesia
    </Text>
  </View>;
};
export default Coffe;
