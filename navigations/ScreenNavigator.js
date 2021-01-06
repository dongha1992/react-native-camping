import React from 'react';
import Filter from '../screens/Filter';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Bookmark, Detail } from '../screens/';
import { COLORS, FONTS, SIZES } from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';

const tabOptions = {
  showLabel: false,
  style: {
    height: '10%',
    backgroundColor: COLORS.themeColor,
  },
  activeTintColor: 'white',
  inactiveTintColor: 'gray',
};

const Tab = createBottomTabNavigator();
const DetailStack = createStackNavigator();

const ScreenNavigator = () => {
  // const DetailStackScreen = () => (
  //   <DetailStack.Navigator>
  //     <DetailStack.Screen name='Detail' component={Detail}></DetailStack.Screen>
  //     <DetailStack.Screen name='Filter' component={Filter}></DetailStack.Screen>
  //   </DetailStack.Navigator>
  // );

  return (
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
          } else if (route.name === 'Filter') {
            iconName = focused ? 'cog' : 'cog-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Detail' component={Detail} />
      <Tab.Screen name='Bookmark' component={Bookmark} />
      <Tab.Screen name='Filter' component={Filter} />
    </Tab.Navigator>
  );
};

export default ScreenNavigator;
