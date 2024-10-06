import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

const WaktuSholat = () => {
  const [input, setInput] = useState('');
  return (
    <View
      style={{
        justifyContent: 'center',
        // alignItems: 'center',
        flex: 1,
        backgroundColor: 'black',
      }}>
      <TextInput
        value={input}
        onChangeText={text => setInput(text)}
        placeholder="Wiliayah mana yang ingin anda cari"
        placeholderTextColor={'black'}
        style={{
          color: 'black',
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 10,
          marginHorizontal: 50,
          marginTop: -170,
        }}
      />
    </View>
  );
};

export default WaktuSholat;
