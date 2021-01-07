import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import Expo from 'expo';
import { useDispatch, useSelector } from 'react-redux';
import * as Facebook from 'expo-facebook';
import AsyncStorage from '@react-native-community/async-storage';
import { setPhoto } from '../actions/action';
import { images } from '../constants';
const id = '793252461534114';

const setData = async (url) => {
  try {
    await AsyncStorage.setItem('image', url);
  } catch (e) {
    console.log(e);
  }
};

const login = async (navigation) => {
  try {
    await Facebook.initializeAsync({
      appId: id,
    });
    const {
      type,
      token,
      expirationDate,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}&fields=name,picture`
      );
      const json = await response.json();
      console.log(json, 'info');
      setData(json.picture.data.url);
      Alert.alert('Logged in!', `Hi ${json.name}!`);
      navigation.navigate('Home');
    } else {
      type === 'cancel';
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
};

const handlerButton = (navigation) => {
  return (
    <TouchableOpacity onPress={() => login(navigation)}>
      <View
        style={{
          width: '50%',
          borderRadius: 10,
          padding: 24,
          backgroundColor: '#3b5998',
        }}>
        <Text style={{ color: 'white', fontSize: 18 }}>Login to Facebook</Text>
      </View>
    </TouchableOpacity>
  );
};

function Login({ navigation }) {
  return (
    <>
      <Image
        source={images.mainImage}
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <View
        style={{
          bottom: 550,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: '800',
            color: 'white',
          }}>
          T H E C A M P
        </Text>
      </View>
      <View
        style={{
          bottom: 200,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {handlerButton(navigation)}
      </View>
    </>
  );
}

export default Login;
