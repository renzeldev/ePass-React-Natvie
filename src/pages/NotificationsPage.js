import React, {useEffect, useState} from 'react';
import { Text, StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import NotificationPageComponent from '../components/NotificationPageComponent';
import baseStyles from '../shared/baseStyle';
import Tabbar from '../components/Tabbar';
import * as Dimension from '../shared/dimension';
import { colors } from '../shared/color';
import HeaderComponent from '../shared/components/HeaderComponent';
import * as NotificationService from '../shared/services/notification';
const NotificationPage = ({navigation}) => {

  const [ notifications, setNotifications ] = useState([]);
    useEffect(() =>{
        NotificationService.getNotification().then((data) => {
            setNotifications(data.docs);
        })
        .catch(err => {
            ShowToast({ type: 'warning', title: 'Failed to load cards', duration: 1000 });
        })
    },[])

  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent navigation={navigation}/>
      <View style={baseStyles.titleFieldStyle}>
        <Text style={styles.titleStyle}>Notifications</Text>
      </View>
      <View style={baseStyles.fixedBottom}>
        <NotificationPageComponent navigation={navigation} notifications={notifications} />
        <Tabbar navigation={navigation}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    color: colors.white,
    textAlign: "center",
    fontSize: 64 * Dimension.ew,
    fontWeight: "800",
    fontFamily: 'SF-Pro-Text-Regular',
  }
});

export default NotificationPage;
