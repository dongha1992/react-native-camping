import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import {
  Category,
  YourNextEscape,
  UserInfo,
  UserSelectButton,
  YourNextEscapeTab,
} from '../components';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES, images } from '../constants';
import { useDispatch, useSelector } from 'react-redux';

const profileData = {
  name: 'Dongha Kim',
  point: 200,
};

const CATEGORY_TAB_LIST = [
  {
    id: 1,
    categoryName: 'Location',
    places: [
      {
        id: 0,
        url: images.campAnywhereIllustration,
        title: 'Anywhere',
        average_rate: '25.000',
        tag: ['excited', 'cozy', 'urban', 'family'],
      },
      {
        id: 1,
        url: images.campSeoulIllustraiton,
        title: 'Seoul',
        average_rate: '20.000',
        tag: ['urban', 'family', 'holulu'],
      },
      {
        id: 2,
        url: images.campBusanIllustraiton,
        title: 'Busan',
        average_rate: '15.000',
        tag: ['excited', 'holulu', 'urban'],
      },
      {
        id: 3,
        url: images.campDaeguIllustraiton,
        title: 'Donghae',
        average_rate: '40.000',
        tag: ['cozy', 'urban'],
      },
      {
        id: 4,
        url: images.campJejuIllustration,
        title: 'Jeju',
        average_rate: '40.000',
        tag: ['excited'],
      },
    ],
  },
  {
    id: 2,
    categoryName: 'The Latest',
    places: [
      {
        id: 0,
        url: images.campJejuIllustration,
        title: 'Jeju',
        average_rate: '60.000',
        tag: ['cozy', 'urban', 'family', 'holulu'],
      },
      {
        id: 1,
        url: images.campDaeguIllustraiton,
        title: 'Donghae',
        average_rate: '40.000',
        tag: ['cozy'],
      },
      {
        id: 2,
        url: images.campSeoulIllustraiton,
        title: 'Seoul',
        average_rate: '30.000',
        tag: ['excited', 'cozy', 'urban'],
      },
    ],
  },
  {
    id: 3,
    categoryName: 'Comming Soon',
    places: [
      {
        id: 1,
        url: images.campBusanIllustraiton,
        title: 'Busan',
        average_rate: '20.000',
        tag: ['family', 'holulu'],
      },
      {
        id: 2,
        url: images.campSeoulIllustraiton,
        title: 'Seoul',
        average_rate: '17.000',
        tag: ['urban'],
      },
    ],
  },
];

const Home = () => {
  const [user, setUser] = useState(profileData);
  const [selectedList, setSelectedList] = useState([]);
  const dispatch = useDispatch();
  const selectedId = useSelector((id) => id.MapReducer);

  useEffect(() => {
    const selectedNewList = CATEGORY_TAB_LIST.find(
      (el) => el.id == selectedId.id
    );
    setSelectedList(selectedNewList);
  }, [selectedId]);

  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        {/* Header */}
        <View style={{ height: 200 }}>
          <UserInfo user={user} />
          <UserSelectButton />
        </View>
        {/* Body */}
        <ScrollView style={{ marginTop: SIZES.radius }}>
          <Category />
          {/* Categories */}
          <View style={{ marginTop: SIZES.padding }}>
            <YourNextEscapeTab
              CATEGORY_TAB_LIST={CATEGORY_TAB_LIST}
              selectedTab={selectedId.id}
            />
            <YourNextEscape selectedList={selectedList} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;
