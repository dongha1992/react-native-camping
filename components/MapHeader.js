import React, { useState } from 'react';
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

const MapHeader = () => {
  return (
    <View style={{ top: 0, height: height * 0.15, width: width }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          height: height * 0.15,
          paddingHorizontal: 14,
        }}>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
          }}>
          <View>
            <View>
              <Icon name='bonfire' size={18}></Icon>
            </View>
            <View>
              <Text style={{ fontSize: 12, color: '#A5A5A5', marginBottom: 5 }}>
                Detected Location
              </Text>
              <TextInput />
            </View>
          </View>
          <View>
            <TouchableOpacity>
              <Icon name='ios-settings' size={24} color='black' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MapHeader;
