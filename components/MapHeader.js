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

const MapHeader = ({ navigation }) => {
  const SreenContainer = ({ children }) => <View>{children}</View>;
  return (
    <SreenContainer>
      <SafeAreaView style={{ top: 0, height: height * 0.1, width: width }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: height * 0.1,
            paddingHorizontal: 14,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              height: height * 0.15,
              paddingHorizontal: 14,
            }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <View
                style={{
                  height: 24,
                  width: 24,
                  borderRadius: 14,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: COLORS.themeColor,
                }}>
                <Icon name='bonfire' size={18} color='white'></Icon>
              </View>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 14 }}>
              <Text style={{ fontSize: 12, color: '#A5A5A5', marginBottom: 5 }}>
                Detected Location
              </Text>
              <TextInput
                style={{
                  width: 150,
                  borderBottomWidth: 1,
                  borderColor: COLORS.lightGray3,
                }}
              />
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity>
                <Icon
                  name='ios-settings'
                  size={24}
                  color='black'
                  onPress={() => navigation.push('Filter')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SreenContainer>
  );
};

export default MapHeader;
