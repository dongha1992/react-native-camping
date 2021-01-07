import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { setMapList, setSelectedTabType } from '../actions/action';
import { COLORS, FONTS, SIZES } from '../constants';
const { width, height } = Dimensions.get('window');
import { useDispatch, useSelector } from 'react-redux';

const SORT_BY = [
  { title: 'Distance', id: 1, name: 'distance' },
  { title: 'Ratings', id: 2, name: 'rating' },
  { title: 'Price', id: 3, name: 'price' },
];
const TYPE = [
  { title: 'All', id: 1, name: 'all' },
  { title: 'Tenting', id: 2, name: 'tent' },
  { title: 'RV Camping', id: 3, name: 'rv' },
];
const PRICE = [
  { title: 'Free', id: 1, name: 'Free' },
  { title: '~10,000', id: 2, name: '10000' },
  { title: '~50,000', id: 3, name: '50000' },
  { title: '100,000', id: 4, name: '100000' },
];

const Filter = ({ navigation }) => {
  const [selectedButton1, setSelectedButton1] = useState(1);
  const [selectedButton2, setSelectedButton2] = useState(1);
  const [selectedButton3, setSelectedButton3] = useState(1);

  const [optionFull, setOptionFull] = useState(false);
  const [optionRated, setOptionRated] = useState(false);
  const [optionFree, setOptionFree] = useState(false);

  const dispatch = useDispatch();
  const { filters } = useSelector((filter) => filter.MapReducer);

  const onChangeButtonHandler = (id, title) => {
    if (title === 'Distance' || title === 'Ratings' || title === 'Price') {
      setSelectedButton1(id);
    }
    if (title === 'All' || title === 'Tenting' || title === 'RV Camping') {
      setSelectedButton2(id);
    }
    if (
      title === 'Free' ||
      title === '~10,000' ||
      title === '~50,000' ||
      title === '100,000'
    ) {
      setSelectedButton3(id);
    }
  };

  const sortByButtonList = SORT_BY.map((button) => {
    return (
      <TouchableOpacity
        style={[
          styles.button,
          selectedButton1 === button.id ? styles.active : null,
        ]}
        onPress={() => {
          onChangeButtonHandler(button.id, button.title);
          dispatch(setSelectedTabType({ sort: button.name }));
        }}>
        <Text
          style={[
            styles.buttonText,
            selectedButton1 === button.id ? styles.activeText : null,
          ]}>
          {button.title}
        </Text>
      </TouchableOpacity>
    );
  });

  const typeButtonList = TYPE.map((button) => {
    return (
      <TouchableOpacity
        style={[
          styles.button,
          selectedButton2 === button.id ? styles.active : null,
        ]}
        onPress={() => {
          onChangeButtonHandler(button.id, button.title);
          dispatch(setSelectedTabType({ type: button.name }));
        }}>
        <Text
          style={[
            styles.buttonText,
            selectedButton2 === button.id ? styles.activeText : null,
          ]}>
          {button.title}
        </Text>
      </TouchableOpacity>
    );
  });

  const priceButtonList = PRICE.map((button) => {
    return (
      <TouchableOpacity
        style={[
          styles.lastButton,
          selectedButton3 === button.id ? styles.active : null,
        ]}
        onPress={() => {
          onChangeButtonHandler(button.id, button.title);
          dispatch(setSelectedTabType({ price: button.name }));
        }}>
        <Text
          style={[
            styles.buttonText,
            selectedButton3 === button.id ? styles.activeText : null,
          ]}>
          {button.title}
        </Text>
      </TouchableOpacity>
    );
  });

  console.log(filters, 'type');

  const renderHeader = () => {
    return (
      <View
        style={{
          flex: 0.1,
          flexDirection: 'row',
          justifyContent: 'center',
          height: height * 0.2,
          width: width,
          paddingHorizontal: 15,
          paddingTop: 10,
        }}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
            <Icon name='md-arrow-back' size={24} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ fontSize: SIZES.h2 }}>Filter</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
            <Icon name='ios-search' size={24} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      {renderHeader()}
      <ScrollView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <View style={styles.section}>
          <View>
            <Text style={styles.title}>Sort By</Text>
          </View>
          <View style={styles.buttons}>{sortByButtonList}</View>
        </View>
        <View style={styles.section}>
          <View>
            <Text style={styles.title}>Type</Text>
          </View>
          <View style={styles.buttons}>{typeButtonList}</View>
        </View>
        <View style={styles.section}>
          <View>
            <Text style={styles.title}>Price</Text>
          </View>
          <View style={styles.buttons}>{priceButtonList}</View>
        </View>
        <View style={styles.section}>
          <View>
            <Text style={styles.title}>More Options</Text>
          </View>
          <View style={styles.option}>
            <Text style={{ fontSize: 13 }}>Show spots that are full</Text>
            <Switch
              value={optionFull}
              ios_backgroundColor='#EAEAED'
              trackColor={{ false: '#EAEAED', true: '#FF7657' }}
              onValueChange={() => {
                setOptionFull(!optionFull);
              }}
            />
          </View>
          <View style={styles.option}>
            <Text style={{ fontSize: 13 }}>Show only highly rated spots</Text>
            <Switch
              value={optionRated}
              ios_backgroundColor='#EAEAED'
              trackColor={{ false: '#EAEAED', true: '#FF7657' }}
              onValueChange={() => {
                setOptionRated(!optionRated);
              }}
            />
          </View>
          <View style={styles.option}>
            <Text style={{ fontSize: 13 }}>Show only Free Spots</Text>
            <Switch
              value={optionFree}
              ios_backgroundColor='#EAEAED'
              trackColor={{ false: '#EAEAED', true: '#FF7657' }}
              onValueChange={() => {
                setOptionFree(!optionFree);
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Filter;

const styles = StyleSheet.create({
  section: {
    flexDirection: 'column',
    marginHorizontal: 14,
    marginBottom: 14,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray3,
  },
  title: { marginVertical: 14, fontSize: SIZES.h3, fontWeight: '600' },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 14,
    borderColor: COLORS.themeColor,
    borderWidth: 1,
  },
  button: {
    flex: 1,
    padding: 14,
    borderRadius: 10,
    width: 133,
    alignItems: 'center',
    alignContent: 'center',
  },
  buttonText: { textAlign: 'center', fontWeight: '500' },
  active: {
    backgroundColor: COLORS.themeColor,
  },
  activeText: {
    color: COLORS.white,
  },
  lastButton: {
    flex: 1,
    padding: 14,
    borderRadius: 10,
    width: 100,
    alignItems: 'center',
    alignContent: 'center',
  },
  option: {
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
