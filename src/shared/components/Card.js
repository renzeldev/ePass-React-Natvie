import React from 'react';
import * as Dimension from '../dimension';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import { colors } from '../color';
import { Card } from '@ui-kitten/components';

const CommonCard = (props) => {
    return (
        <Card style={[styles.mainBoard, props.style]} onPress={() => {props.navigation.navigate('chooseIsp')}}>
            <View style={styles.cardStyle}>
                <Image style={[styles.imageStyle, props.imageColor]} source={props.image} />
                <Text style={[styles.titleStyle, props.titleColor]}>{props.title}</Text>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    mainBoard: {
        paddingTop: 70 * Dimension.eh,
        paddingBottom: 60 * Dimension.eh,
        borderRadius: 40 * Dimension.ew,
        paddingHorizontal: 0,
        // shadowColor: '#33404F',
        // shadowOffset: {
        //     width: 0,
        //     height: 0,
        // },
        // shadowOpacity: 6.15,
        // shadowRadius: 50,
        // elevation: 5,
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
        flex:1,
        width: 300 * Dimension.ew,
        height: 264 * Dimension.eh,
    },
    titleStyle: {
        color: colors.blue,
        textAlign: "center",
        fontFamily: 'SF-Pro-Text-Regular',
        fontSize: 30 * Dimension.eh,
        fontWeight: "600",
    },
    imageStyle: {
        width: 88 * Dimension.ew,
        height: 88 * Dimension.ew
    },
    cardStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
    }
})

export default CommonCard;