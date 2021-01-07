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
import { COLORS, FONTS, SIZES } from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';

const UserInfo = ({ user, userImage }) => {
  console.log(userImage);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.padding,
      }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 15 }}>
          <Image
            source={{ uri: userImage }}
            style={{ width: 50, height: 50, borderRadius: 10, marginRight: 10 }}
          />
          <View>
            <Text style={{ ...FONTS.h3, color: COLORS.black }}>
              Good Morning
            </Text>
            <Text style={{ ...FONTS.h2, color: COLORS.black }}>
              {user.name}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.themeColor,
          height: 40,
          paddingLeft: 3,
          paddingRight: SIZES.radius,
          borderRadius: 20,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 25,
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
            <Icon name='ios-flashlight' size={22} color={COLORS.white} />
          </View>
          <Text
            style={{
              marginLeft: SIZES.base,
              color: COLORS.white,
              ...FONTS.body3,
            }}>
            {user.point} Point
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UserInfo;
