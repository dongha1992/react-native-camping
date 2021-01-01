import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const coordArray = [
  {
    complex_name: '건물1',
    area: '10평 이하',
    min_price: '8.7',
    max_price: '18.7',
    latitude: '31.506370242702',
    longitude: '127.373641718788',
  },
];

const MapContainer = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1, height: height * 0.5, width }}
        showsMyLocationButton
        initialRegion={{
          latitude: 37.50637,
          longitude: 127.05365,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
        }}></MapView>
    </View>
  );
};

export default MapContainer;
