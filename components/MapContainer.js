import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { Ionicons, Foundation, FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import MapView from 'react-native-maps';
import { setMapList } from '../actions/action';
import { COLORS, FONTS, SIZES } from '../constants';
import CampingList from './CampingList';
import * as Icon from 'react-native-vector-icons';

const { width, height } = Dimensions.get('window');
const { Marker } = MapView;

const MapContainer = ({ campingData }) => {
  const [campings, setCampings] = useState([]);
  const { filters } = useSelector((filter) => filter.MapReducer);

  const filteredList =
    filters.type === 'all'
      ? campings
      : campings.filter((list) => list.type === filters.type);

  useEffect(() => {
    setCampings(campingData);
  }, []);

  const campingMarker = ({ type }) => {
    return (
      <View
        style={[
          styles.marker,
          type === 'rv' ? styles.rvMarker : styles.tentMarker,
        ]}>
        {type === 'rv' ? (
          <Icon.FontAwesome name='truck' size={18} color='#FFF' />
        ) : (
          <Icon.Foundation name='mountains' size={18} color='#FFF' />
        )}
      </View>
    );
  };

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
        }}>
        {filteredList.map((marker) => {
          return (
            <Marker
              key={`marker-${marker.id}`}
              coordinate={marker.latlng}
              onPress={() => {
                console.log('Dd');
              }}
              description={marker.name}>
              {campingMarker(marker)}
              <View style={styles.textWrap}>
                <Text style={styles.text}>{marker.price}</Text>
              </View>
            </Marker>
          );
        })}
      </MapView>
      <CampingList campingData={filteredList} />
    </View>
  );
};

export default MapContainer;

const styles = StyleSheet.create({
  marker: {
    width: 36,
    height: 36,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#FFF',
    marginLeft: 5,
  },
  rvMarker: { backgroundColor: '#FFBA5A' },
  tentMarker: { backgroundColor: '#FF7657' },
  textWrap: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 5,
    borderRadius: 15,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
});
