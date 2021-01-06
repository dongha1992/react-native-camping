import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import LineDivider from '../components/LineDivider';
import { COLORS, FONTS, SIZES } from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';

const BUTTON_TITLE_LIST = [
  { title: 'My information', icon: 'md-person' },
  { title: 'Point', icon: 'md-journal' },
  { title: 'Payment', icon: 'md-card-sharp' },
];

const UserSelectButton = () => {
  const buttonList = BUTTON_TITLE_LIST.map((ele, idx) => {
    return (
      <>
        <TouchableOpacity key={idx} style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 15,
            }}>
            <Icon name={ele.icon} size={20} color={COLORS.themeColor}></Icon>
            <Text
              style={{
                marginLeft: 10,
                ...FONTS.body4,
                color: COLORS.black,
              }}>
              {ele.title}
            </Text>
          </View>
        </TouchableOpacity>
      </>
    );
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: SIZES.padding,
      }}>
      <View
        style={{
          flexDirection: 'row',
          height: 70,
          backgroundColor: COLORS.white,
          borderRadius: SIZES.radius,
          borderWidth: 1,
          borderColor: '#e6e6e3',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}>
        {buttonList}
      </View>
    </View>
  );
};
export default UserSelectButton;
