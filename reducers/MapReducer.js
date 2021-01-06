import { SELECTED_ID } from '../actions/types';
import { SELECTED_TAP_TYPE } from '../actions/types';
import { BOOKMARK_LIST } from '../actions/types';
import { DELETE_BOOKMARK_LIST } from '../actions/types';

const initialState = {
  bookmarkList: [],
  id: 1,
  filters: {
    sort: 'distance',
    type: 'all',
    price: 'free',
  },
  bookmarkedId: null,
};

const MapReducer = (state = initialState, action) => {
  console.log(action, 'action ');

  switch (action.type) {
    case SELECTED_ID:
      return { ...state, id: action.payload };

    case SELECTED_TAP_TYPE:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      };

    case BOOKMARK_LIST:
      return {
        ...state,
        bookmarkList: state.bookmarkList.concat({ ...action.payload }),
      };

    case DELETE_BOOKMARK_LIST:
      return {
        ...state,
        bookmarkList: action.payload,
      };

    default:
      return state;
  }
};
export default MapReducer;
