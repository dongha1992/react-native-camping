import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  Image,
  Modal,
} from 'react-native';
import { Ionicons, Foundation, FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import MapView from 'react-native-maps';
import { setClickedMarker } from '../actions/action';
import { COLORS, FONTS, SIZES } from '../constants';
import CampingList from './CampingList';
import * as Icon from 'react-native-vector-icons';

const { width, height } = Dimensions.get('window');
const { Marker } = MapView;

const information = ['Phone', 'Address', 'Cooking'];

const MapContainer = ({ campingData }) => {
  const [campings, setCampings] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [markered, setMarkered] = useState('');
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
    <View
      style={{
        flex: 1,
      }}>
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
                setModalVisible(true);
                setMarkered(marker);
              }}
              description={marker.name}>
              {campingMarker(marker)}
              <View style={styles.textWrap}>
                <Text style={styles.text}>
                  {marker.price === 'Free'
                    ? 'Free'
                    : Number(marker.price).toLocaleString(2)}
                </Text>
              </View>
            </Marker>
          );
        })}
      </MapView>
      <View style={styles.centeredView}>
        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>{markered.name}</Text>
              <View
                style={{
                  flex: 1,
                }}>
                <Text style={styles.modalText}>Phone : {markered.phone}</Text>
                <Text style={styles.modalText}>
                  Address: {markered.address}
                </Text>
                <Text style={styles.modalText}>
                  Cooking : {markered.cooking}
                </Text>
              </View>
              <TouchableHighlight
                style={{
                  ...styles.openButton,
                  backgroundColor: COLORS.themeColor2,
                }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Close</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <CampingList campingData={filteredList} />
      </View>
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

  centeredView: {},
  modalView: {
    width: 240,
    height: 200,
    margin: 280,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    right: 180,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: COLORS.themeColor2,
    borderRadius: 20,
    padding: 7,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTitle: {
    marginTop: 5,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  modalText: {
    marginTop: 5,
    marginBottom: 15,
  },
});
