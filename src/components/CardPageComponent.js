import React from 'react';
import * as Dimension from '../shared/dimension';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { colors } from '../shared/color';

import Card1Component from '../shared/components/Card1Component';
import CardComponent from '../shared/components/CardComponent';
import MainThread from '../shared/components/MainThread';


import CreditCard from '../assets/images/credit_card.png';
import GasLocation from '../assets/images/local_gas_station.png';

const CardPageComponent = ({navigation, cards}) => {
    return (
        <MainThread Component={ChildComponent} navigation={navigation} cards={cards}/>
    )
}

const ChildComponent = ({navigation, cards}) => {
    const cardData = [
        {
            image: 'card',
            type: "Card1",
            description: "Card Info",
            price: "1231233331233",
        }, {
            image: 'card',
            type: "Card1",
            description: "Card Info",
            price: "1231233331233",
        }, {
            image: 'card',
            type: "Card1",
            description: "Card Info",
            price: "1231233331233",
        }
    ]
    return (

        <View style={styles.mainBoard}>
            <Text style={styles.titleStyle}>Cards</Text>
            <View style = {{marginVertical: 36 * Dimension.eh}}>
                <CardTypeComponent navigation={navigation}/>
            </View>
            {cards.length !== 0 && <Text style={styles.titleStyle}>Your Cards</Text>}
            <ScrollView style={styles.scrollView}>
                {cards.map((card, index) => {
                    return (
                        <View key={index} style={styles.cardBody}>
                            <Card1Component card={card} navigation={navigation} />
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const CardTypeComponent = ({navigation}) => {
    return (
        <Layout style={{ flexDirection: 'row', justifyContent: "space-evenly" }}>
            <Layout style={styles.cardPadding}>
                <CardComponent image={CreditCard} title="Buy Card" navigation={navigation} navigate="buycard" type="toll" style={{width: 317 * Dimension.ew, height: 264 * Dimension.eh}}/>
            </Layout>
            <Layout style={styles.cardPadding}>
                <CardComponent image={GasLocation} title="Fund Fuel Card" navigation={navigation} navigate="buycard" type="fuel" style={{width: 317 * Dimension.ew, height: 264 * Dimension.eh}}/>
            </Layout>
        </Layout>
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
        // marginTop: 10 * Dimension.eh,
        marginBottom: 19 * Dimension.eh,
        textAlign: 'center',
    },
    scrollView: {
        maxHeight: 750 * Dimension.eh,
    },
    cardGrid: {
        width: Dimension.W * 0.8 / 2,
    },
    cardBody: {
        marginHorizontal: 36 * Dimension.ew,
        marginVertical: 16 * Dimension.eh,
    },
});

export default CardPageComponent;