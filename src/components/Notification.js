import { StyleSheet, Text, View, Alert } from 'react-native';
import React from 'react';
import * as Dimension from '../shared/dimension';
import { colors } from '../shared/color';

const Notification = (props) => {

  // React.useEffect(() => {
  //   var string = ""
  //   if (props.notification !== undefined)
  //     Object.keys(props.notification).map(key => string+=key);
  //   Alert.alert("wefw", string)
  // },[])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {props.notification && props.notification.title}
        </Text>
      <Text style={styles.content}>
        {props.notification && props.notification.body}
        </Text>
      <Text style={styles.date}>
        {props.notification && props.notification.updateFormatted}
      </Text>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'column',
    
    paddingLeft: 39 * Dimension.ew,
    width: 750 * Dimension.ew,
    height: 121 * Dimension.eh,
    marginBottom: 15 * Dimension.eh
  },
  title: {
    color: colors.blue,
    fontSize: 30 * Dimension.ew,
    fontWeight: '700',
    fontFamily: 'SF-Pro-Text-Regular',
  },
  content: {
    color: colors.blue,
    fontSize: 20 * Dimension.ew,
    fontWeight: '300',
    fontFamily: 'SF-Pro-Text-Regular',
  },
  date: {
    color: colors.blue,
    fontSize: 16 * Dimension.ew,
    fontWeight: '300',
    fontFamily: 'SF-Pro-Text-Regular',
    marginTop: 16 * Dimension.eh,
  },
});
