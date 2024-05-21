import React from 'react';
import * as Dimension from '../dimension';
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { colors } from '../color';
import { Card } from '@ui-kitten/components';
import ImageGroups from '../imageGroups';


const Card1Component = (props) => {
    return (
        <Card style={[styles.mainBoard, props.style]} onPress={() => { props.navigation.navigate("buycarddetail", props.card) }}>
            {/* <TouchableOpacity onPress={() => { props.navigation.navigate("buycarddetail", props.card) }}> */}
                <View style={styles.cardStyle}>
                    <View style={{ flex: 1 }}>
                        <Image style={styles.imageStyle} source={ImageGroups[props.card.type]} />
                    </View>
                    <View style={[styles.descriptionStyle, { flex: 4, marginLeft: 60 * Dimension.ew, alignItems: "flex-start" }]}>
                        <Text style={styles.title}>{props.card.provider} {props.card.type} Card</Text>
                        <Text style={styles.description}>{props.card.serial}</Text>
                    </View>
                    <View style={[styles.descriptionStyle, { flex: 4, alignItems: "flex-end" }]}>
                        <Text style={styles.title}>
                            { props.card.number ? props.card.number.replace("000",""): props.card.actualBalanceFormatted }
                        </Text>
                    </View>
                </View>
            {/* </TouchableOpacity> */}
        </Card>
    )
}

const styles = StyleSheet.create({
    mainBoard: {
        paddingTop: 20 * Dimension.eh,
        paddingBottom: 20 * Dimension.eh,
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
        borderRadius: 40 * Dimension.ew,
    },
    title: {
        color: colors.blue,
        fontFamily: 'SF-Pro-Text-Regular',
        fontSize: 30 * Dimension.ew,
        fontWeight: "900",
        textTransform: 'uppercase',
    },
    description: {
        color: colors.blue,
        fontFamily: 'SF-Pro-Text-Regular',
        fontSize: 24 * Dimension.ew,
        fontWeight: "300",
        opacity: 0.5,
    },
    imageStyle: {
        width: 106 * Dimension.ew,
        height: 106 * Dimension.ew,
    },
    cardStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center",
        minHeight: 66 * Dimension.eh,
    },
    descriptionStyle: {
        justifyContent: 'flex-start',
        alignItems: "center",
    }
})

export default Card1Component;