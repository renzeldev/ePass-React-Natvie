import React, { useEffect, useState } from 'react';
import * as Dimension from '../shared/dimension';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { colors } from '../shared/color';
import CardPageComponent from '../components/CardPageComponent';
import Tabbar from '../components/Tabbar';
import Dashboardinfo from '../components/DashboardInfo';
import baseStyles from '../shared/baseStyle';
import HeaderComponent from '../shared/components/HeaderComponent';
import axios from 'axios'
import { API } from '../shared/api'
import { ShowToast } from '../shared/elements/notification';
import * as CardService from '../shared/services/card';

const CardPage = ({ navigation }) => {
    const [ cards, setCards ] = useState([]);
    useEffect(() =>{
        CardService.getCards().then((data) => {
            setCards(data.docs);
        })
        .catch(err => {
            ShowToast({ type: 'warning', title: 'Failed to load cards', duration: 1000 });
        })
    },[])
    return (
        <View style={{ flex: 1 }}>
            <HeaderComponent navigation={navigation}/>
            <Dashboardinfo navigation={navigation}/>
            <View style={baseStyles.fixedBottom}>
                <CardPageComponent navigation={navigation} cards={cards}/>
            </View>
        </View>
    )
}

export default CardPage;