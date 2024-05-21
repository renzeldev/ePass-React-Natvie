import React from 'react';
import * as Dimension from '../dimension';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../color';
import { Card } from '@ui-kitten/components';
import activityImage from '../imageGroups';


const OrderComponent = (props) => {
    return (
        <Card style={[styles.mainBoard, props.style]}>
            <TouchableOpacity onPress={() => { props.navigation.navigate("order", props.order) }}>
                <View style={styles.cardStyle}>
                    <View style={{ flex: 1, }}>
                        <Image style={styles.imageStyle} source={activityImage[props.order.type]} />
                    </View>
                    <View style={[styles.descriptionStyle, { flex: 3, marginLeft: 40 * Dimension.ew, alignItems: "flex-start" }]}>
                        <Text style={styles.title}>{props.order.type}</Text>
                        <Text style={styles.description}>{props.order.ref}</Text>
                    </View>
                    <View style={[styles.descriptionStyle, { flex: 4, alignItems: "flex-end" }]}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.title}>({props.order.qty})</Text>
                            <Text style={styles.title}>{props.order.amountFormatted}</Text>
                        </View>
                        <Text style={styles.description}>{props.order.updateFormatted}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Card>
    )
}

const styles = StyleSheet.create({
    mainBoard: {
        paddingTop: 25 * Dimension.eh,
        paddingBottom: 25 * Dimension.eh,
        shadowColor: '#33404F',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 6.15,
        shadowRadius: 50,
        elevation: 5,
    },
    title: {
        color: colors.blue,
        fontFamily: 'SF-Pro-Text-Regular',
        fontSize: 30 * Dimension.ew,
        fontWeight: "600",
    },
    description: {
        color: colors.blue,
        fontFamily: 'SF-Pro-Text-Regular',
        fontSize: 22 * Dimension.ew,
        fontWeight: "500",
        opacity: 0.5,
    },
    imageStyle: {
        width: 88 * Dimension.ew,
        height: 88 * Dimension.ew,
    },
    cardStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center",
        height: 66 * Dimension.eh,
        // flex: 1,
        flexDirection: 'row',
    },
    descriptionStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: "center",
    }
})

export default OrderComponent;