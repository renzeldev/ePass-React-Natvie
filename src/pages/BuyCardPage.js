import React from 'react';
import * as Dimension from '../shared/dimension';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../shared/color';
import BuyCardPageComponent from '../components/BuyCardPageComponent';
import Tabbar from '../components/Tabbar';
import Dashboardinfo from '../components/DashboardInfo';
import baseStyles from '../shared/baseStyle';
import HeaderComponent from '../shared/components/HeaderComponent';
import { useRoute } from '@react-navigation/native';

const BuyCardPage = ({ navigation }) => {
    const route = useRoute();
    const cardType = route.params.type;
    return (
        <View style={{ flex: 1 }}>
            <HeaderComponent navigation={navigation} />
            <Dashboardinfo navigation={navigation}/>
            <View style={baseStyles.fixedBottom}>
                <BuyCardPageComponent navigation={navigation} cardType={cardType}/>
            </View>
        </View>
    )
}

export default BuyCardPage;