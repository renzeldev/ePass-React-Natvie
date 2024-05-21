import React, {useEffect} from 'react';
import * as Dimension from '../shared/dimension';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { colors } from '../shared/color';
import MainThread from '../shared/components/MainThread';
import BaseStyle from '../shared/baseStyle';
import { Button, ButtonGroup, Toggle, Input } from '@ui-kitten/components';



const OrderPageComponent = (props) => {
    
    return (
        <MainThread Component={ChildComponent} navigation={props.navigation} card={props.card}/>
    )
}

const ChildComponent = (props) => {
    return (

        <View style={styles.mainBoard}>
            <View style={styles.mainView}>
                <View style={styles.inlineStyle}>
                    <Text style={styles.mediumTitle}>Order Ref</Text>
                    <Text style={styles.mediumTitle}>{props.card.ref}</Text>
                </View>
                <View style={styles.inlineStyle}>
                    <Text style={styles.mediumTitle}>Type</Text>
                    <Text style={styles.mediumTitle}>{props.card.type}</Text>
                </View>
                <View style={styles.inlineStyle}>
                    <Text style={styles.mediumTitle}>Item</Text>
                    <Text style={styles.mediumTitle}>Total - TomCard</Text>
                </View>
                <View style={styles.inlineStyle}>
                    <Text style={styles.mediumTitle}>Status</Text>
                    <Text style={styles.mediumTitle}>{props.card.status}</Text>
                </View>
                <View style={styles.inlineStyle}>
                    <Text style={styles.mediumTitle}>QTY</Text>
                    <Text style={styles.mediumTitle}>{props.card.qty}</Text>
                </View>
                <View style={styles.inlineStyle}>
                    <Text style={styles.mediumTitle}>Amount</Text>
                    <Text style={styles.mediumTitle}>{props.card.amountFormatted}</Text>
                </View>
                <View style={styles.inlineStyle}>
                    <Text style={styles.mediumTitle}>Delivery</Text>
                    <Text style={styles.mediumTitle}>{props.card.delivery}</Text>
                </View>
                <View style={styles.inlineStyle}>
                    <Text style={styles.mediumTitle}>Date</Text>
                    <Text style={styles.mediumTitle}>{props.card.updateFormatted}</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    mainBoard: {
        paddingTop: 42 * Dimension.eh,
    },
    mediumTitle: {
        color: colors.blue,
        fontSize: 30 * Dimension.ew,
        fontWeight: '700',
        fontFamily: 'SF-Pro-Text-Regular',
    },
    mainView: {
        // maxHeight: 800 * Dimension.eh,
        marginVertical: 15 * Dimension.eh,
        paddingHorizontal: 36 * Dimension.ew,
    },
    inlineStyle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 30 * Dimension.eh,
    },
});

export default OrderPageComponent;