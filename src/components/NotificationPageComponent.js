import React from 'react';
import { Text, StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import Notification from './Notification';
import MainThread from '../shared/components/MainThread';
import * as Dimension from '../shared/dimension';

const NotificationPageComponent = ({ navigation, notifications }) => {
  return (
    <MainThread Component={ChildComponent} navigation={navigation} notifications={notifications} />
  )
}

const ChildComponent = ({ navigation, notifications }) => {
  return (
    <View style={styles.mainBoard}>
      <ScrollView style={styles.scrollView}>
        {notifications.length > 0 && notifications.map((notification, index) => {
          return (
            <View key={index} style={styles.cardBody}>
              {
                <Notification notification={notification} navigation={navigation} />
              }
              
            </View>
          )
        })}
        <Notification />

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBoard: {
    paddingTop: 94 * Dimension.eh,
  },
  scrollView: {
    height: 800 * Dimension.eh,
  }
});

export default NotificationPageComponent;
