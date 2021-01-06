import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { setMapList, setSelectedTabType } from '../actions/action';

import {
  MapContainer,
  MapHeader,
  MapHeaderTab,
  CampingList,
} from '../components';

import { campingData } from '../data/campingData';
import { useDispatch, useSelector } from 'react-redux';
const TAB_LIST = [
  { title: 'All Spots', type: 'all' },
  { title: 'Tenting', type: 'tent' },
  { title: 'RV Camping', type: 'rv' },
];

const Detail = () => {
  const [selectedTab, setSelectedTab] = useState('all');

  const dispatch = useDispatch();

  const onFilterHandler = (tab) => {
    dispatch(setSelectedTabType({ type: tab.type }));
  };

  const onSelectedHandler = (type) => {
    setSelectedTab(type);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapHeader />
      <MapHeaderTab
        selectedTab={selectedTab}
        onSelectedHandler={onSelectedHandler}
        TAB_LIST={TAB_LIST}
        campingData={campingData}
        onFilterHandler={onFilterHandler}
      />
      <ScrollView style={{ flex: 1 }}>
        <MapContainer campingData={campingData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
