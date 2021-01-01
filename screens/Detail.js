import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MapContainer, MapHeader } from '../components';

const Detail = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapHeader />
      <ScrollView style={{ flex: 1 }}>
        <MapContainer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
