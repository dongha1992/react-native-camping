import { SELECTED_ID } from '../actions/types';

const initialState = {
  id: 1,
};

const selectedIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_ID: {
      return { ...state, id: action.payload };
    }
    default:
      return state;
  }
};
export default selectedIdReducer;
