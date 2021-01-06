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
import { COLORS, SIZES, images } from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedId } from '../actions/action';

const YourNextEscapeTab = ({ CATEGORY_TAB_LIST, selectedTab }) => {
  const dispatch = useDispatch();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ flex: 1, marginRight: SIZES.padding }}
        onPress={() => dispatch(setSelectedId(item.id))}>
        {selectedTab == item.id && (
          <Text
            style={{
              // fontFamily: Montserrat,
              fontSize: SIZES.h2,
              color: COLORS.themeColor,
            }}>
            {item.categoryName}
          </Text>
        )}
        {selectedTab != item.id && (
          <Text
            style={{
              // fontFamily: Montserrat,
              fontSize: SIZES.h2,
              color: COLORS.lightGray3,
            }}>
            {item.categoryName}
          </Text>
        )}
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1, paddingLeft: SIZES.padding }}>
      <FlatList
        data={CATEGORY_TAB_LIST && CATEGORY_TAB_LIST}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
        horizontal
      />
    </View>
  );
};

export default YourNextEscapeTab;
