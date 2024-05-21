import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Dimensions from '../dimension';
import { colors } from '../color';

const InlineText = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.type}</Text>
            <Text style={styles.text}>{props.price}</Text>
        </View>
    )
}

export default InlineText

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 100 * Dimensions.eh,
    },
    text: {
        fontSize: 30 * Dimensions.ew,
        color: colors.blue,
        textTransform: 'capitalize',
        fontWeight: '600',
        fontFamily: 'SF-Pro-Text-Regular',
    },
})