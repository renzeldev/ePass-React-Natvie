import React from 'react';
import * as Dimension from '../dimension';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Platform } from 'react-native';
import { colors } from '../color';
import { Card } from '@ui-kitten/components';

const CardComponent = (props) => {
    return (
        // <TouchableOpacity onPress={() => {
        //     props.navigation.navigate(props.navigate, props.data)
        // }}>
        <Card style={[styles.mainBoard, props.style]} onPress={() => { props.navigation.navigate(props.navigate, {data: props.data, type: props.type}) }}>

            <View style={styles.cardStyle}>
                <Image style={styles.imageStyle} source={props.image} />
                <Text style={[styles.titleStyle, props.titleColor]}>{props.title}</Text>
            </View>

        </Card>
        // </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    mainBoard: {
        paddingVertical: 30 * Dimension.eh,
        borderRadius: 40 * Dimension.ew,
        // paddingHorizontal: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(51, 64, 79, 0.15)',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.5,
                shadowRadius: 40 * Dimension.ew,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    titleStyle: {
        color: colors.blue,
        textAlign: "center",
        fontFamily: 'SF-Pro-Text-Regular',
        fontSize: 30 * Dimension.ew,
        fontWeight: "600",
    },
    imageStyle: {
        width: 88 * Dimension.ew,
        height: 88 * Dimension.ew,
        marginBottom: 20 * Dimension.eh,
    },
    cardStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
        minWidth: 203 * Dimension.ew,
        // paddingVertical: 30 * Dimension.eh,
    }
})

export default CardComponent;