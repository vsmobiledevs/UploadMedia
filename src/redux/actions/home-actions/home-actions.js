import * as TYPES from '../../types';

export const uploadDataRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.UPLOAD_DATA_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
