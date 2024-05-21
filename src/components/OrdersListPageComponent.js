import React from 'react';
import * as Dimension from '../shared/dimension';
import { View, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../shared/color';
import MainThread from '../shared/components/MainThread';
import OrderComponent from '../shared/components/OrderComponent';

const OrdersListPageComponent = ({ navigation, orders }) => {
    return (
        <MainThread Component={ChildComponent} navigation={navigation} orders={orders} />
    )
}

const ChildComponent = ({ navigation, orders }) => {

    return (
        <View style={styles.mainBoard}>
            <ScrollView style={styles.scrollView}>
                {orders.map((order, index) => {
                    return (
                        <View key={index} style={styles.cardBody}>
                            {
                                <OrderComponent order={order} style={styles.circleCard} navigation={navigation} />
                            }
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainBoard: {
        paddingTop: 94 * Dimension.eh,
    },
    titleStyle: {
        fontSize: 40 * Dimension.ew,
        fontWeight: '600',
        color: colors.blue,
        marginTop: 20 * Dimension.eh,
        marginLeft: 32 * Dimension.ew,
        marginBottom: 20 * Dimension.eh,
    },
    cardBody: {
        marginHorizontal: 36 * Dimension.ew,
        marginVertical: 16 * Dimension.eh,
    },
    circleCard: {
        borderRadius: 29 * Dimension.ew,
    },
    scrollView: {
        height: 800 * Dimension.eh,
    }
});

export default OrdersListPageComponent;