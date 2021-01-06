import { SELECTED_ID } from './types';
import { SELECTED_TAP_TYPE } from './types';
import { BOOKMARK_LIST } from './types';
import { DELETE_BOOKMARK_LIST } from './types';

export const setSelectedId = (id) => {
  return {
    type: SELECTED_ID,
    payload: id,
  };
};

export const setSelectedTabType = (type) => {
  return {
    type: SELECTED_TAP_TYPE,
    payload: type,
  };
};

export const setBookmarkList = (list) => {
  return {
    type: BOOKMARK_LIST,
    payload: list,
  };
};

export const setDeletedList = (list) => {
  return {
    type: DELETE_BOOKMARK_LIST,
    payload: list,
  };
};
