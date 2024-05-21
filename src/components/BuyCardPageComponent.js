import React, { useEffect, useState } from 'react';
import * as Dimension from '../shared/dimension';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../shared/color';

import Card1Component from '../shared/components/Card1Component';
import MainThread from '../shared/components/MainThread';
import { useRoute } from '@react-navigation/native';
import * as CardService from '../shared/services/card'

const BuyCardPageComponent = ({navigation, cardType}) => {
    return (
        <MainThread Component={ChildComponent} navigation={navigation} cardType={cardType}/>
    )
}

const ChildComponent = ({navigation, cardType}) => {

    const [cardData, setCardData] = useState([]);
    
    useEffect(() => {
        if(cardType === "toll") {
            CardService.getTollCards().then((data) => {
                setCardData(data.docs);
            }).catch((err) => {

            })
        } else {
            CardService.getFuelCards().then((data) => {
                setCardData(data.docs);
            }).catch((err) => {

            })
        }
    },[])
    return (

        <View style={styles.mainBoard}>
            <Text style={styles.titleStyle}>Select Card Type</Text>
            <ScrollView style={styles.scrollView}>
                {cardData.map((card, index) => {
                    return (
                        <View key={index} style={styles.cardBody}>
                            <Card1Component card={card} navigation={navigation}/>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    mainBoard: {
        paddingTop: 42 * Dimension.eh,
    },
    titleStyle: {
        fontSize: 40 * Dimension.ew,
        fontWeight: '700',
        fontFamily: 'SF-Pro-Text-Regular',
        color: colors.blue,
        marginTop: 29 * Dimension.eh,
        marginBottom: 19 * Dimension.eh,
        textAlign: 'center',
    },
    scrollView: {
        maxHeight: 800 * Dimension.eh,
        marginVertical: 15 * Dimension.eh,
    },
    cardGrid: {
        width: Dimension.W * 0.8 / 2,
    },
    cardBody: {
        marginHorizontal: 36 * Dimension.ew,
        marginVertical: 16 * Dimension.eh,
    },
});

export default BuyCardPageComponent;