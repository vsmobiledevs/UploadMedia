import {put, takeLatest} from 'redux-saga/effects';
import * as types from '../../types';
import {post} from '../../../services/apiCalls';
import {uploadDataEndpoint} from '../../../utils/routes';
import {responseValidator} from '../../../utils';

export function* uploadDataRequest() {
  yield takeLatest(types.UPLOAD_DATA_REQUEST, uploadData);
}

function* uploadData(params) {
  try {
    let response = yield post(`${uploadDataEndpoint}`);
    yield put({
      type: types.UPLOAD_DATA_SUCCESS,
      payload: responseData,
    });
    params.cbSuccess(response);
  } catch (error) {
    console.log('Error is ==> ', error?.response);
    yield put({
      type: types.UPLOAD_DATA_FAILURE,
      payload: null,
    });
    let status = JSON.stringify(error?.message);
    let msg = error?.response?.data?.message;
    responseValidator(status, msg);
    params.cbFailure(error);
  }
}
