import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../shared/color'
import * as Dimensions from '../shared/dimension'

const SubCard = (props) => {
    return (
        <View style={styles.container}>
            <View style={[styles.cardContainer, props.style]}>
                <Text style={styles.text}>{props.title}</Text>
                {props.subTitle}
                {props.children}
            </View>
        </View>
    )
}

export default SubCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    cardContainer: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 88 * Dimensions.ew,
        borderTopRightRadius: 88 * Dimensions.ew,
        paddingHorizontal: 40 * Dimensions.ew,
    },
    text: {
        fontSize: 40 * Dimensions.ew,
        textAlign: 'center',
        color: colors.blue,
        fontWeight: '600',
        fontFamily: 'SF-Pro-Text-Regular',
    },
})