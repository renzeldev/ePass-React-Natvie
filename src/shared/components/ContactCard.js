import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colors } from '../color';
import { Card } from '@ui-kitten/components';
import * as Dimension from '../dimension';
import ImageGroups from '../imageGroups';

const ContactCard = (props) => {
    return (
        <Card style={[styles.mainBoard, props.style]}>
            <TouchableOpacity>
                <View style={styles.cardStyle}>
                    <View style={styles.descriptionStyle}>
                        <Text style={styles.title}>{props.card.type}</Text>
                        <Text style={styles.description}>{props.card.description}</Text>
                    </View>

                    <View>
                        <Image style={styles.imageStyle} source={ImageGroups[props.card.image]} />
                    </View>
                </View>
            </TouchableOpacity>
        </Card>
    )
}

export default ContactCard

const styles = StyleSheet.create({
    mainBoard: {
        borderRadius: 40 * Dimension.ew,
        shadowColor: '#33404F',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 6.15,
        shadowRadius: 50,
        elevation: 5,
        display: "flex",
        paddingVertical: 5 * Dimension.eh,
    },
    cardStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between'
    },
    descriptionStyle: {
        flexDirection: 'column',
    },
    title: {
        color: colors.blue,
        fontFamily: 'SF-Pro-Text-Regular',
        fontSize: 30 * Dimension.ew,
        fontWeight: "700",
    },
    description: {
        color: colors.blue,
        fontFamily: 'SF-Pro-Text-Regular',
        fontSize: 24 * Dimension.ew,
        fontWeight: "300",
    },
    imageStyle: {
        width: 42 * Dimension.ew,
        height: 42 * Dimension.ew,
    }
})