import React from 'react';
import * as Dimension from '../shared/dimension';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors } from '../shared/color';
import { Layout } from '@ui-kitten/components';
import MainThread from '../shared/components/MainThread';
import CardComponent from '../shared/components/CardComponent';
import ActivityComponent from '../shared/components/ActivityComponent';
import CreditCard from '../assets/images/credit_card.png';
import GasStation from '../assets/images/local_gas_station.png';
import Help from '../assets/images/help_outline.png';

const DashboardComponent = ({navigation}) => {
    return (
        <MainThread Component={ChildComponent} navigation={navigation}/>
    )
}

const ChildComponent = ({navigation}) => {

    let activities = [
        {
            type: 'recharge',
            title: 'Account Recharge',
            description: 'Visa **23',
            balance: '+2800.11',
            date: 'Dec 04'
        },
        {
            type: 'fuel',
            title: 'Fuel Parma',
            description: 'Pama station xyz',
            balance: '-1500.64',
            date: 'Dec 01'
        },
        {
            type: 'toll',
            title: 'Toll',
            description: 'Toll station',
            balance: '-150.00',
            date: 'Nov 30'
        },
    ]

    return (

        <View style={styles.mainBoard}>
            <ScrollView style={styles.scrollView}>
            <Text style={[styles.titleStyle, {marginTop:0}]}>Activities</Text>
            <Layout style={{flexDirection:'row', justifyContent:"space-evenly"}}>
                <Layout style={styles.cardPadding}>
                    <CardComponent image={CreditCard} title="Cards" style={{width: 203 * Dimension.ew}} navigate="card" navigation={navigation}/>
                </Layout>
                <Layout style={styles.cardPadding}>
                    <CardComponent image={GasStation} title="Order Fuel" style={{width: 203 * Dimension.ew}} navigate="orderfuel" navigation={navigation}/>
                </Layout>
                <Layout style={styles.cardPadding}>
                    <CardComponent image={Help} title="Help" style={{width: 203 * Dimension.ew}} navigation={navigation}/>
                </Layout>
            </Layout>
            <Text style={styles.titleStyle}>Recent Activities</Text>
            
            {activities.map((activity, index) => {
                return (
                    <ActivityComponent key={index} activity={activity} />
                )
            })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainBoard: {
        paddingTop: 60 * Dimension.eh,
    },
    titleStyle: {
        fontSize: 40 * Dimension.ew,
        fontWeight: '600',
        fontFamily: 'SF-Pro-Text-Regular',
        color: colors.blue,
        marginTop: 20 * Dimension.eh,
        marginLeft: 32 * Dimension.ew,
        marginBottom: 20 * Dimension.eh,
    },
    cardPadding: {
        // padding: 10
    },
    scrollView: {
        maxHeight: 760 * Dimension.eh,
    },
});

export default DashboardComponent;