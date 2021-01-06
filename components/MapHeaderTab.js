import React, { useState, useEffect } from 'react';
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
  StyleSheet,
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const MapHeaderTab = ({ TAB_LIST, campingData, onFilterHandler }) => {
  const [campings, setCampings] = useState([]);
  const dispatch = useDispatch();
  const { filters } = useSelector((filter) => filter.MapReducer);

  useEffect(() => {
    setCampings(campingData);
  }, []);

  const tabList = TAB_LIST.map((tab) => {
    return (
      <View
        style={[
          styles.tab,
          filters.type === tab.type ? styles.activeTab : null,
        ]}>
        <Text
          onPress={() => {
            onFilterHandler(tab);
          }}
          style={[
            styles.tabTitle,
            filters.type === tab.type ? styles.activeTabTitle : null,
          ]}>
          {tab.title}
        </Text>
      </View>
    );
  });

  return <View style={styles.tabs}>{tabList}</View>;
};

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.04,
  },
  tab: {
    justifyContent: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 15,
    borderColor: 'transparent',
    height: height * 0.035,
  },
  tabTitle: {
    fontSize: 14,
    color: COLORS.lightGray4,
    marginBottom: 5,
  },
  activeTab: {
    borderBottomColor: COLORS.themeColor,
    marginBottom: 5,
    borderWidth: 2.5,
  },
  activeTabTitle: {
    color: COLORS.themeColor,
    fontSize: SIZES.h3,
    fontWeight: 'bold',
  },
});

export default MapHeaderTab;
