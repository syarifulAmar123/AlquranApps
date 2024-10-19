import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './home/Home';
import SplashScreen from './splashScreen/SplashScreen';
import DetailSurah from './detailSurah/DetailSurah';
import WaktuSholat from './waktuSholat/WaktuSholat';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DetailSurah" component={DetailSurah} />
        <Stack.Screen name="WaktuSholat" component={WaktuSholat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
