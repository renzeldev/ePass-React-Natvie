import React from 'react';
import * as Dimension from '../shared/dimension';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../shared/color';
import BuyCardDetailPageComponent from '../components/BuyCardDetailPageComponent';

import baseStyles from '../shared/baseStyle';
import { useRoute } from '@react-navigation/native';
import HeaderComponent from '../shared/components/HeaderComponent';
import Dashboardinfo from '../components/DashboardInfo';

const BuyCardDetailPage = ({navigation}) => {
    const route = useRoute();
    const card = route.params;
    return (
        <View style={{ flex: 1 }}>
            <HeaderComponent />
            <Dashboardinfo navigation={navigation}/>
            <View style={baseStyles.fixedBottom}>
                <BuyCardDetailPageComponent navigation={navigation} card={card}/>
            </View>
        </View>
    )
}

export default BuyCardDetailPage;