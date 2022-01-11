import React from 'react';
import {
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {colors, HP, textSize} from '../../utils';

export const AppButton = ({width, txt, onPress, loading = false}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.buttonStyle, {width: width}]}
      onPress={onPress}>
      {!loading ? (
        <Text style={styles.buttonText}>{txt}</Text>
      ) : (
        <ActivityIndicator size="small" color={colors.b2} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: colors.p1,
    justifyContent: 'center',
    height: Platform.select({ios: HP('4.5'), android: HP('6')}),
  },
  buttonText: {
    color: colors.p1,
    fontWeight: '500',
    fontSize: textSize.txt15,
    top: Platform.select({ios: 0, android: -1}),
  },
});
