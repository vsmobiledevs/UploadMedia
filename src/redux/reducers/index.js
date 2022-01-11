import {combineReducers} from 'redux';

import homeReducer from './home-reducers/home-reducer';

let rootReducer;
export default rootReducer = combineReducers(
  Object.assign({
    home: homeReducer,
  }),
);
