import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { colors } from '../shared/color';
import * as Dimension from '../shared/dimension';

const Logo = () => {
  return (
    <View style={styles.horizontalLayout}>
      <Image source={require('../assets/images/logo.png')} style={styles.size} />
      <Text style={styles.titleFont}>ePass</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  horizontalLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleFont: {
    color: colors.white,
    fontSize: 40,
    fontWeight: '800',
    marginLeft: 30 * Dimension.ew,
    fontFamily: 'SF-Pro-Text-Regular',
    letterSpacing: 8 * Dimension.ew,

  },
  size: {
    width: 127 * Dimension.ew,
    height: 127 * Dimension.eh,
  },
});
