import { SELECTED_ID } from './types';

export const setSelectedId = (id) => {
  return {
    type: SELECTED_ID,
    payload: id,
  };
};
