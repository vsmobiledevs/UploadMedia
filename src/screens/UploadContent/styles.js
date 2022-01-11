import {Platform, StyleSheet} from 'react-native';
import {colors, HP, textSize, WP} from '../../utils';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.bg1,
  },
  txtBox: {
    alignSelf: 'center',
    marginBottom: HP('5'),
    paddingHorizontal: WP('10'),
  },
  txtStyle: {
    lineHeight: 23,
    color: colors.b2,
    fontWeight: '500',
    fontSize: textSize.txt16,
  },
  barContainer: {height: Platform.select({ios: HP('2'), android: HP('2.4')})},
  barStyle: {
    marginTop: HP('3'),
    alignSelf: 'center',
    marginBottom: HP('3'),
    borderColor: 'transparent',
    height: Platform.select({ios: HP('2'), android: HP('2.4')}),
  },
});

export default styles;
