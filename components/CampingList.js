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
  };

  console.log(filters, 'fffff');

  return (
    <View style={{ flex: 1 }}>
      {lists.map((list) => {
        return (
          <CampingLists
            key={list.id}
            list={list}
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

// const campingLists = campingData.map((list) => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         flexDirection: 'row',
//         padding: 20,
//         borderBottomWidth: 0.5,
//         borderBottomColor: '#A5A5A5',
//       }}>
//       <View style={{ flex: 1 }}>
//         <Image
//           style={{ width: 150, height: 150, borderRadius: 10 }}
//           source={{ uri: list.image }}
//         />
//       </View>
//       <View
//         style={{
//           flex: 1.2,
//           flexDirection: 'column',
//           justifyContent: 'space-around',
//           paddingLeft: 10,
//         }}>
//         <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{list.name}</Text>
//         <Text style={{ color: COLORS.lightGray4 }}>{list.description}</Text>
//         <View
//           style={{
//             flexDirection: 'row',
//           }}>
//           <View
//             style={{
//               flex: 0.3,
//               flexDirection: 'row',
//               alignItems: 'center',
//             }}>
//             <Icon name='star' color={COLORS.themeColor2}></Icon>
//             <Text style={{ marginLeft: 4, color: COLORS.themeColor2 }}>
//               {list.rating}
//             </Text>
//           </View>
//           <View
//             style={{
//               flex: 0.3,
//               flexDirection: 'row',
//               alignItems: 'center',
//             }}>
//             <Icon name='trail-sign' color={COLORS.themeColor}></Icon>
//             <Text style={{ marginLeft: 4, color: COLORS.themeColor }}>
//               {list.distance}
//             </Text>
//           </View>
//           <View
//             style={{
//               flex: 0.4,
//               flexDirection: 'row',
//               alignItems: 'center',
//             }}>
//             <Icon name='md-pricetag' color={COLORS.black}></Icon>
//             <Text style={{ marginLeft: 4, color: COLORS.black }}>
//               {list.price}
//             </Text>
//           </View>
//         </View>
//       </View>
//       <View
//         style={{
//           flex: 0.2,
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <Icon
//           name={isHeart.id === list.id && isHeart ? 'heart' : 'heart-outline'}
//           size={24}
//           color={isHeart.id === list.id && isHeart ? 'red' : 'black'}
//           onPress={() => {
//             dispatch(
//               setBookmarkList(campingData.find((el) => el.id === list.id))
//             );
//             setIsHeart({ status: !isHeart, id: list.id });
//           }}
//         />
//       </View>
//     </View>
//   );
// });
