import React from 'react';
import * as Dimension from '../shared/dimension';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../shared/color';
import { useSelector } from 'react-redux';


const Dashboardinfo = (props) => {
    // const balanceNumber = 2653.1;
    const { payload } = useSelector(state => state.authReducer);
    return (
        <View style={styles.mainBoard}>
            <Text style={[styles.headerStyle, styles.generalStyle]}>Welcome, {payload.firstName}</Text>
            <Text style={[styles.font_32, styles.generalStyle]}>Your Balance:</Text>
            <Text style={[styles.font_24, styles.generalStyle]}>K<Text style={[styles.generalStyle, styles.font_64]}>{payload.balance}</Text></Text>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {props.navigation.navigate('recharge')}} >
                <Text style={styles.buttonTitle}>RECHARGE</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainBoard: {
        // paddingLeft: 15,
        paddingHorizontal: 40 * Dimension.ew,
    },

    headerStyle: {
        marginTop: 55 * Dimension.eh,
        fontSize: 64 * Dimension.ew,
        fontWeight: '800',
        letterSpacing: 1 * Dimension.ew
    },
    font_32: {
        marginTop: 35 * Dimension.eh,
        fontSize: 32 * Dimension.ew,
        fontWeight: '500'
    },
    font_24: {
        fontSize: 24 * Dimension.ew,
        fontWeight: '500',
    },
    font_64: {
        marginTop: 10 * Dimension.eh,
        fontSize: 64 * Dimension.ew,
        fontWeight: '300'
    },
    generalStyle: {
        color: colors.white,
        fontFamily: 'SF-Pro-Text-Regular',
    },
    buttonStyle: {
        marginTop: 12 * Dimension.eh,
        marginBottom: 56 * Dimension.eh,
        width: 214 * Dimension.ew,
        height: "auto",
        paddingVertical: 15 * Dimension.eh,
        borderRadius: 50 * Dimension.eh,
        backgroundColor: colors.yellow,
    },
    buttonTitle: {
        fontSize: 20 * Dimension.eh,
        fontWeight: '600',
        color: colors.blue,
        textAlign: 'center',
        fontFamily: 'SF-Pro-Text-Regular',
    }
});

export default Dashboardinfo;