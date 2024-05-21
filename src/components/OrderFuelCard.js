import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import MainThread from '../shared/components/MainThread';
import Card2Component from '../shared/components/Card2Component';
import * as Dimension from '../shared/dimension';
import { colors } from '../shared/color';

const OrderFuelCard = ({ navigation, providers }) => {
    return (
        <View>
            <MainThread Component={ChildComponent} navigation={navigation} providers={providers} />
        </View>
    )
}

const ChildComponent = ({ navigation, providers }) => {

    const cardData = [
        {
            image: 'fuel',
            fuelStation: 'Samfuel'
        },
        {
            image: 'fuel',
            fuelStation: 'Meru'
        },
        {
            image: 'fuel',
            fuelStation: 'Puma'
        },
        {
            image: 'fuel',
            fuelStation: 'Total'
        },
        {
            image: 'fuel',
            fuelStation: 'Engen'
        },
        {
            image: 'fuel',
            fuelStation: 'Karan'
        },
    ]
    return (

        <View style={styles.mainBoard}>
            {providers.length !== 0 && <Text style={styles.titleStyle}>Select Fuel Station</Text>}
            <ScrollView style={styles.scrollView}>
                {providers.length > 0 && providers.map((provider, index) => {
                    return (
                        <View key={index} style={styles.cardBody}>
                            {
                                <Card2Component provider={provider} navigation={navigation} />
                            }
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}


export default OrderFuelCard

const styles = StyleSheet.create({
    mainBoard: {
        paddingBottom: 30 * Dimension.eh,
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
        maxHeight: 900 * Dimension.eh,
    },
    cardBody: {
        marginHorizontal: 36 * Dimension.ew,
        marginVertical: 10 * Dimension.eh,
    },
})