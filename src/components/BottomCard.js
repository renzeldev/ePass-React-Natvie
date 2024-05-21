import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import * as Dimension from '../shared/dimension';
import { colors } from '../shared/color';
const BottomCard = props => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleFont}>{props.title}</Text>
      </View>
      <View style={styles.cardContainer}>{props.children}</View>
    </View>
  );
};

export default BottomCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleFont: {

    color: colors.white,
    fontSize: 64 * Dimension.ew,
    // marginTop: 329 * Dimension.eh,
    // marginLeft: 159 * Dimension.ew,
    fontWeight: '800',
    fontFamily: 'SF-Pro-Text-Regular',
  },
  cardContainer: {
    flex: 2,
    paddingTop: 128 * Dimension.eh,
    width: 750 * Dimension.ew,
    height: 1007 * Dimension.eh,
    backgroundColor: colors.white,
    borderTopRightRadius: 88 * Dimension.ew,
    borderTopLeftRadius: 88 * Dimension.ew,
  },
});
