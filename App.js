import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Detail } from './screens';
import Icon from 'react-native-vector-icons/Ionicons';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './stores/store';

const Tab = createBottomTabNavigator();
const store = createStore(rootReducer);

const tabOptions = {
  showLabel: false,
  style: {
    height: '10%',
    backgroundColor: '#e88a38',
  },
  activeTintColor: 'white',
  inactiveTintColor: 'gray',
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={tabOptions}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Detail') {
                iconName = focused ? 'map' : 'map-outline';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}>
          <Tab.Screen name='Home' component={Home} />
          <Tab.Screen name='Detail' component={Detail} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
