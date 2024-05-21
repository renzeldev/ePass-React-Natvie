import React from 'react';
import * as Dimension from '../shared/dimension';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../shared/color';
import OrderPageComponent from '../components/OrderPageComponent';
import Tabbar from '../components/Tabbar';
import baseStyles from '../shared/baseStyle';
import { useRoute } from '@react-navigation/native';

const OrderPage = ({ navigation }) => {
    const route = useRoute();
    const card = route.params;
    return (
        <View style={{ flex: 1 }}>
            <View style={baseStyles.titleFieldStyle}>
                <Text style={styles.titleStyle}>Order</Text>
            </View>
            <View style={baseStyles.fixedBottom}>
                <OrderPageComponent navigation={navigation} card={card} />
                <Tabbar navigation={navigation}/>
            </View>        
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        color: colors.white,
        textAlign: "center",
        fontSize: 64 * Dimension.ew,
        fontWeight: "800",
        fontFamily: 'SF-Pro-Text-Regular',
    }
});

export default OrderPage;