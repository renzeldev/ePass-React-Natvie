import React from 'react';
import * as Dimension from '../dimension';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors } from '../color';
import { Card } from '@ui-kitten/components';
import activityImage from '../imageGroups';


const ActivityComponent = (props) => {
    return (
        
        <Card style={[styles.mainBoard, props.style]}>
            <View style={styles.cardStyle}>
                <View style={{ flex: 1, }}>
                    <Image style={styles.imageStyle} source={activityImage[props.activity.type]} />
                </View>
                <View style={[styles.descriptionStyle, { flex:5, marginLeft:40*Dimension.ew}]}>
                    <Text style={[styles.title, ]}>{props.activity.title}</Text>
                    <Text style={styles.description}>{props.activity.description}</Text>
                </View>
                <View style={[styles.descriptionStyle, { flex: 3,alignItems:"flex-end" }]}>
                    <Text style={styles.title}>{props.activity.balance}</Text>
                    <Text style={styles.description}>{props.activity.date}</Text>
                </View>
            </View>
        </Card>

    )
}

const styles = StyleSheet.create({
    mainBoard: {
        paddingVertical: 10 * Dimension.eh,
        elevation: 5,
        borderColor:'white',
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
        width: 82 * Dimension.ew,
        height: 82 * Dimension.ew,
    },
    cardStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center",
        height: 40 * Dimension.eh,
        // flex: 1,
        flexDirection: 'row',
    },
    descriptionStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "flex-start",
    }
})

export default ActivityComponent;