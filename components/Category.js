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

const CATEGORY_LIST = [
  { url: images.campCarIllustraiton, title: 'Camping with car' },
  {
    url: images.campCarNightIllustraiton,
    title: 'Camping night',
  },
  {
    url: images.campMountainIllustraiton,
    title: 'Mountaing is calling you',
  },
  {
    url: images.campTogetherIllustration,
    title: 'Camping together',
  },
  {
    url: images.campForestIllustration,
    title: 'In forest',
  },
  {
    url: images.campTogetherIllustration,
    title: 'Camping together',
  },
  {
    url: images.campIntothewildIllustration,
    title: 'Into The Wild',
  },
];

const renderItem = ({ item, index }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        marginLeft: index == 0 ? SIZES.padding : 0,
        marginRight: SIZES.radius,
      }}>
      <View>
        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.black,
            paddingLeft: 10,
            paddingBottom: 10,
          }}>
          {item.title}
        </Text>
        <Image
          source={item.url}
          resizeMode='cover'
          style={{
            width: 180,
            height: 250,
            borderRadius: 20,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const Category = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{ ...FONTS.h2, color: COLORS.black }}>
          Find what you want
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.lightGray,
              paddingTop: 5,
              textDecorationLine: 'underline',
            }}>
            see more
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, marginTop: SIZES.padding }}>
        <FlatList
          renderItem={renderItem}
          data={CATEGORY_LIST}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Category;
