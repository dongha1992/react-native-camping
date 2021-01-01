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
import { COLORS, FONTS, SIZES, images } from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';

const YourNextEscape = ({ selectedList }) => {
  console.log(selectedList && selectedList, 'child');

  const renderItem = ({ item }) => {
    return (
      <ScrollView style={{ marginVertical: SIZES.base }}>
        <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
          <Image
            source={item.url}
            resizeMode='cover'
            style={{
              width: 100,
              height: 110,
              borderRadius: 10,
            }}
          />
          <View style={{ flex: 1, marginLeft: SIZES.radius }}>
            <Text
              style={{
                paddingRight: SIZES.padding,
                ...FONTS.h2,
                color: COLORS.black,
                height: 35,
              }}>
              {item.title}
            </Text>
            <Text
              style={{
                ...FONTS.h3,
                marginBottom: 13,
                color: COLORS.lightGray,
              }}>
              ~ {item.average_rate}
            </Text>
            <View
              style={{
                flexDirection: 'row',
              }}>
              {item.tag &&
                item.tag.map((el, idx) => {
                  return (
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: SIZES.base,
                        marginRight: SIZES.base,
                        height: 35,
                        borderRadius: SIZES.radius,
                        backgroundColor:
                          idx === 1 ? COLORS.themeColor2 : COLORS.themeColor,
                      }}>
                      <Text style={{ ...FONTS.body4, color: COLORS.white }}>
                        {el}
                      </Text>
                    </View>
                  );
                })}
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingLeft: SIZES.padding,
        marginTop: SIZES.radius,
      }}>
      <FlatList
        data={selectedList.places}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  );
};

export default YourNextEscape;
