import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Detail, Bookmark, Login } from './screens';
import Filter from './screens/Filter';
import Icon from 'react-native-vector-icons/Ionicons';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { COLORS } from './constants';
import rootReducer from './stores/store';
import * as Font from 'expo-font';
import ScreenNavigator from './navigations/ScreenNavigator';

const store = createStore(rootReducer);
const Stack = createStackNavigator();

const tabOptions = {
  showLabel: false,
  style: {
    height: '10%',
    backgroundColor: COLORS.themeColor,
  },
  activeTintColor: 'white',
  inactiveTintColor: 'gray',
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Login'}>
          <Stack.Screen name='Home' component={ScreenNavigator} />
          <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
