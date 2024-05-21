import React, { useEffect, useState } from 'react';
import * as Dimension from '../shared/dimension';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../shared/color';
import { Button } from '@ant-design/react-native'
import HeaderComponent from '../shared/components/HeaderComponent';
import OrdersListPageComponent from '../components/OrdersListPageComponent';
import Tabbar from '../components/Tabbar';
import baseStyles from '../shared/baseStyle';
import * as orderService from '../shared/services/orderService'
import { useToast } from "react-native-toast-notifications";

const OrdersPage = ({ navigation }) => {
    const toast = useToast();

    const [orders, setOrders] = useState([])
    useEffect(() => {
        orderService.getOrders().then((data) => {
            setOrders(data);
        })
            .catch(err => {
                toast.show("Invalid data", {
                    type: 'warning',
                    placement: 'top',
                    duration: 3000,
                    offset: 30,
                    animationType: 'zoom-in',
                  });
            })
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <HeaderComponent navigation={navigation} />
            <View style={baseStyles.titleFieldStyle}>
                <Text style={styles.titleStyle}>Orders</Text>
            </View>
            <View style={baseStyles.fixedBottom}>
                <OrdersListPageComponent navigation={navigation} orders={orders} />
                <Tabbar navigation={navigation} />
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

export default OrdersPage;