import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import baseStyles from '../shared/baseStyle';
import Tabbar from '../components/Tabbar';
import * as Dimension from '../shared/dimension';
import { colors } from '../shared/color';
import HeaderComponent from '../shared/components/HeaderComponent';
import TollPriceComponent from '../components/TollPriceComponent';
import { useToast } from "react-native-toast-notifications";
import * as PriceService from '../shared/services/price';

const TollPricesPage = ({ navigation }) => {
    const [tollPrices, setTollPrices] = useState([]);
    const toast = useToast();
    useEffect(() => {
        PriceService.getTollPrices().then((tollPrices) => {
            setTollPrices(tollPrices);
        })
        .catch(err => {
            toast.show('Network Error', {
                type: 'warning',
                placement: 'top',
                duration: 3000,
                offset: 30,
                animationType: 'zoom-in',
              })
        })
    })
    return (
        <View style={{ flex: 1 }}>
            <HeaderComponent navigation={navigation}/>
            <View style={baseStyles.titleFieldStyle}>
                <Text style={styles.titleStyle}>Toll Prices</Text>
            </View>
            <View style={baseStyles.fixedBottom}>
                <TollPriceComponent  tollPrices={tollPrices}/>
                <Tabbar navigation={navigation}/>
            </View>
        </View>
    )
}

export default TollPricesPage

const styles = StyleSheet.create({
    titleStyle: {
        color: colors.white,
        textAlign: "center",
        fontFamily: 'SF-Pro-Text-Regular',
        fontSize: 64 * Dimension.ew,
        fontWeight: "800",
    }
})