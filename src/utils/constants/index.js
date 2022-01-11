import {Dimensions} from 'react-native';

export const userNameRegEx = new RegExp(/@([\w\d.\-_]+)?/g);

export const Constants = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height,
};
