import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Dimension from '../dimension'
import { colors } from '../color'

const DrawerItem = (props) => {

    return (
        <TouchableOpacity onPress={() => { props.navigation.navigate(props.card.link) }}>
            <View style={styles.horizontel}>
                <Image style={styles.imageStyle} source={props.card.src} />
                <Text style={styles.textStyle}>{props.card.text}</Text>
            </View>
        </TouchableOpacity>

    )
}

export default DrawerItem

const styles = StyleSheet.create({
    horizontel: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 40 * Dimension.eh
    },
    imageStyle: {
        width: 55 * Dimension.ew,
        height: 55 * Dimension.ew,
    },
    textStyle: {
        color: colors.blue,
        fontSize: 40 * Dimension.ew,
        fontWeight: '800',
        marginLeft: 30 * Dimension.ew
    }
})