import React from 'react';
import * as Dimension from '../shared/dimension';
import { View, Text, StyleSheet, ScrollView, BackHandler } from 'react-native';
import { colors } from '../shared/color';
import { Button } from '@ant-design/react-native'
import HeaderComponent from '../shared/components/HeaderComponent';
import DashboardComponent from '../components/DashboardComponent';
import Tabbar from '../components/Tabbar';
import Dashboardinfo from '../components/DashboardInfo';

import baseStyles from '../shared/baseStyle';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as AuthActions from '../store/actions/authAction';
import * as authServices from '../shared/services/auth';


const DashboardPage = ({navigation}) => {

    const authDispatch = useDispatch();
    
    useEffect(() => {
        const backAction = () => {
            Alert.alert('Hold on!', 'Are you sure you want to go back?', [
              {
                text: 'Cancel',
                onPress: () => null,
                style: 'cancel',
              },
              {text: 'YES', onPress: () => {
                authDispatch(AuthActions.LogOut());
                authServices.Logout(navigation);
                BackHandler.exitApp()
            }},
            ]);
            return true;
          };
      
          const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
          );
      
          return () => backHandler.remove();
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <HeaderComponent navigation={navigation}/>
            <Dashboardinfo navigation={navigation}/>
            <View style={baseStyles.fixedBottom}>
                <DashboardComponent navigation={navigation}/>
                <Tabbar navigation={navigation}/>
            </View>
        </View>
    )
}


export default DashboardPage;