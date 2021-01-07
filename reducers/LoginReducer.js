const { GET_PHOTO } = '../actions/types';

const initialState = {
  photo: '',
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTO:
      return { ...state, photo: action.payload };
  }
};

export default LoginReducer;
