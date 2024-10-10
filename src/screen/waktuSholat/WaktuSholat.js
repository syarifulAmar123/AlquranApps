import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView from 'react-native-maps';
import {PermissionsAndroid} from 'react-native';

const WaktuSholat = () => {
  const [lokasi, setLokasi] = useState(null);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'ReactNativeCode App needs access to your location',
          message:
            'ReactNativeCode App needs access to your location ' +
            'so we can know where you are.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the GPS to access Location');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestLocationPermission();
    Geolocation.getCurrentPosition(
      position => {
        setLokasi(position);
      },
      error => {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      },
    );
  }, []);

  return (
    <View>
      {lokasi && (
        <MapView
          style={{flex: 1}}
          region={{
            latitude: lokasi.coords.latitude,
            longitude: lokasi.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          showsUser
          Location={true}>
          <MapView.Marker
            coordinate={{
              latitude: lokasi.coords.latitude,
              longitude: lokasi.coords.longitude,
            }}
            title="Lokasi Pengguna"
          />
        </MapView>
      )}
    </View>
  );
};

export default WaktuSholat;
