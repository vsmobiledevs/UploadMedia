import {fork} from 'redux-saga/effects';
import {uploadDataRequest} from './home-saga/home-saga';

export function* rootSaga() {
  yield fork(uploadDataRequest);
}
