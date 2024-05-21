import { StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'
import { colors } from '../../shared/color'
import * as Dimensions from '../../shared/dimension'
import { Card } from '@ui-kitten/components';

const LongCard = (props) => {
    return (
        <Card style={[styles.mainBoard, props.style]} onPress={() => {props.navigation.navigate(props.navigate, props.data)}}>
            <View style={styles.cardStyle}>
                <Text style={styles.titleStyle}>{props.text}</Text>
                <Image style={styles.imageStyle} source={props.image} />
            </View>
        </Card>
    )
}

export default LongCard

const styles = StyleSheet.create({
    mainBoard: {
        borderRadius: 40 * Dimensions.ew,
        paddingHorizontal: 0,
        shadowColor: '#33404F',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 6.15,
        shadowRadius: 50,
        elevation: 5,
    },
    titleStyle: {
        color: colors.blue,
        fontSize: 30 * Dimensions.eh,
        fontWeight: "600",
        fontFamily: 'SF-Pro-Text-Regular',
    },
    imageStyle: {
        width: 46 * Dimensions.ew,
        height: 46 * Dimensions.ew
    },
    cardStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",

    }
})