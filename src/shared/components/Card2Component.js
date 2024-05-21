import React from 'react';
import * as Dimension from '../dimension';
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { colors } from '../color';
import { Card } from '@ui-kitten/components';
import ImageGroups from '../imageGroups';


const Card2Component = (props) => {
    return (
        <Card style={[styles.mainBoard, props.style]} onPress={() => { props.navigation.navigate("subcard", props.provider) }}>
            {/* <TouchableOpacity onPress={() => {props.navigation.navigate("subcard", props.card)}}> */}
            <View style={styles.cardStyle}>
                <View >
                    <Image style={styles.imageStyle} source={ImageGroups["fuel"]} />
                </View>

                <View style={styles.descriptionStyle}>
                    <Text style={styles.title}>{props.provider.name}</Text>
                </View>
            </View>
            {/* </TouchableOpacity> */}
        </Card>
    )
}

const styles = StyleSheet.create({
    mainBoard: {
        paddingTop: 10 * Dimension.eh,
        paddingBottom: 10 * Dimension.eh,
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
        fontWeight: "600",
    },

    imageStyle: {
        width: 80 * Dimension.ew,
        height: 80 * Dimension.ew,
        marginLeft: 20 * Dimension.ew,
    },
    cardStyle: {
        flexDirection: 'row',
        alignItems: "center",
        height: 40 * Dimension.eh,
    },
    descriptionStyle: {
        marginLeft: 30 * Dimension.ew
    }
})

export default Card2Component;