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
  Alert,
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { setBookmarkList, setDeletedList } from '../actions/action';
import CampingLists from './CampingLists';
const { width, height } = Dimensions.get('window');

const CampingList = ({ campingData }) => {
  const dispatch = useDispatch();
  const { bookmarkList } = useSelector((store) => store.MapReducer);
  const { filters } = useSelector((store) => store.MapReducer);
  const [clicked, setCliked] = useState(false);
  const [targetId, setTargetId] = useState('');
  const [lists, setList] = useState([]);

  useEffect(() => {
    setList(campingData);
  }, [lists]);

  const onDispatchHandler = (list) => {
    const existed = bookmarkList.find((el) => el.name === list.name);
    if (existed) {
      dispatch(setDeletedList(bookmarkList.filter((el) => el.id !== list.id)));
      Alert.alert('즐겨찾기에서 삭제되었습니다.');
    } else {
      dispatch(setBookmarkList(campingData.find((el) => el.id === list.id)));
      Alert.alert('즐겨찾기에 추가되었습니다.');
    }
  };

  const onHeartHandler = (list) => {
    const editList = lists.map((el) =>
      el.name == list.name ? { ...el, bookmarked: !el.bookmarked } : el
    );
    setList(editList);
    setCliked(!clicked);
    setTargetId(list.id);
  };

  const filterPriceList =
    filters.price === 'Free'
      ? lists.filter((list) => list.price === filters.price)
      : lists.filter((list) => Number(list.price) <= Number(filters.price));

  const filterSortList =
    filters.sort === 'rating'
      ? filterPriceList.sort((a, b) => b.rating - a.rating)
      : filterPriceList.sort((a, b) => a[filters.sort] - b[filters.sort]);

  console.log(filterSortList);

  return (
    <View style={{ flex: 1 }}>
      {filterSortList.map((list) => {
        return (
          <CampingLists
            key={list.id}
            list={list}
            clicked={clicked}
            targetId={targetId}
            onPress={(list) => {
              onDispatchHandler(list);
              onHeartHandler(list);
            }}
          />
        );
      })}
    </View>
  );
};

export default CampingList;
