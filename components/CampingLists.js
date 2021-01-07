import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
  TextInput,
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const CampingLists = ({ list, onPress, bookmark }) => {
  return (
    <View
      style={{
        flex: bookmark ? 0 : 1,
        flexDirection: 'row',
        padding: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: '#A5A5A5',
      }}>
      <View style={{ flex: bookmark ? 0.6 : 1 }}>
        <Image
          style={{
            width: bookmark ? 100 : 150,
            height: bookmark ? 100 : 150,
            borderRadius: 10,
          }}
          source={{ uri: list.image }}
        />
      </View>
      <View
        style={{
          flex: 1.3,
          flexDirection: 'column',
          justifyContent: 'space-around',
          paddingLeft: 10,
        }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{list.name}</Text>
        <Text style={{ color: COLORS.lightGray4 }}>{list.description}</Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 0.7,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon name='star' color={COLORS.themeColor2}></Icon>
            <Text
              style={{
                marginLeft: 4,
                color: COLORS.themeColor2,
                fontWeight: 'bold',
              }}>
              {list.rating}
            </Text>
          </View>
          <View
            style={{
              flex: 0.9,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon name='trail-sign' color={COLORS.themeColor}></Icon>
            <Text
              style={{
                marginLeft: 5,
                color: COLORS.themeColor,
                fontWeight: 'bold',
              }}>
              {list.distance} km
            </Text>
          </View>
          <View
            style={{
              flex: 0.9,
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 8,
            }}>
            <Icon name='wallet-outline' color={COLORS.black}></Icon>
            <Text
              style={{
                marginLeft: 5,
                color: COLORS.black,
                fontWeight: 'bold',
              }}>
              {list.price === 'Free'
                ? 'Free'
                : Number(list.price).toLocaleString(2)}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 0.2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon
          name={list.bookmarked ? 'heart' : 'heart-outline'}
          size={24}
          color={list.bookmarked ? 'red' : 'black'}
          onPress={() => {
            onPress(list);
          }}
        />
      </View>
    </View>
  );
};

export default CampingLists;
