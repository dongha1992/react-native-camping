import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CampingLists from '../components/CampingLists';
import { COLORS, FONTS, SIZES } from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
const { width, height } = Dimensions.get('window');

const Bookmark = () => {
  const bookmark = true;
  const { bookmarkList } = useSelector((store) => store.MapReducer);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          // flex: 0.5,
          flexDirection: 'row',
          width: width,
          height: height * 0.1,
          paddingHorizontal: 14,
          paddingTop: 10,
        }}>
        <View style={{ flex: 0.4 }}>
          <TouchableOpacity>
            <Icon name='md-arrow-back' size={24} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.3 }}>
          <Text style={{ fontSize: SIZES.h2 }}>Favourite</Text>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <ScrollView
          style={{
            flex: 1,
            flexDirection: 'column',
            paddingHorizontal: 5,
          }}>
          {bookmarkList.map((list) => {
            return <CampingLists list={list} bookmark={bookmark} />;
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Bookmark;
