import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Detail, Bookmark } from './screens';
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
          initialRouteName={'Home'}>
          <Stack.Screen name='Home' component={ScreenNavigator} />
        </Stack.Navigator>
      </NavigationContainer>

      {/* <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={tabOptions}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Detail') {
              iconName = focused ? 'map' : 'map-outline';
            } else if (route.name === 'Bookmark') {
              iconName = focused ? 'heart-sharp' : 'heart-half-sharp';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Detail' component={Detail} />
        <Tab.Screen name='Bookmark' component={Bookmark} />
      </Tab.Navigator>
    </NavigationContainer> */}
    </Provider>
  );
};

export default App;
