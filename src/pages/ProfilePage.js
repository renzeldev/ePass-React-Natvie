import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import * as Dimension from '../shared/dimension';
import { colors } from '../shared/color';
import ProfilePageComponent from '../components/ProfilePageComponent';
import HeaderComponent from '../shared/components/HeaderComponent';
import baseStyles from '../shared/baseStyle';
import Tabbar from '../components/Tabbar';

const ProfilePage = ({ navigation }) => {

  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent navigation={navigation}/>      
      <View style={baseStyles.titleFieldStyle}>
        <Text style={styles.titleStyle}>Profile</Text>
      </View>
      <View style={baseStyles.fixedBottom}>
        <ProfilePageComponent />
        <Tabbar navigation={navigation} />
      </View>
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  titleStyle: {
    color: colors.white,
    textAlign: "center",
    fontSize: 64 * Dimension.ew,
    fontWeight: "800",
    fontFamily: 'SF-Pro-Text-Regular',
  }
});
