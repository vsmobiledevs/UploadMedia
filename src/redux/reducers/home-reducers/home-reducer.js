import * as TYPES from '../../types';

const initialState = {
  error: null,
  loading: false,
  isSuccess: false,
  isFailure: false,
  uploadRes: null,
};

const homeReducer = (state = initialState, action = {}) => {
  const {type, payload} = action;
  switch (type) {
    case TYPES.UPLOAD_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        uploadRes: payload,
      };
    case TYPES.UPLOAD_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        uploadRes: null,
      };
    default:
      return state;
  }
};

export default homeReducer;
