import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import * as Dimension from '../shared/dimension';
import { colors } from '../shared/color';

const Button = props => {
  return (
    <View>
      <TouchableOpacity style={[styles.button, props.style]} onPress={props.onPress}>
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 80 * Dimension.eh,
    backgroundColor: colors.yellow,
    borderRadius: 11 * Dimension.eh,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30 * Dimension.ew,
    marginBottom: 50 * Dimension.eh,
  },
  text: {
    color: colors.blue,
    fontWeight: '700',
    fontSize: 16,
    fontFamily: 'SF-Pro-Text-Regular',
    textTransform: 'uppercase',
  },
});
