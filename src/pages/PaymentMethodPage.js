import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SubCard from '../components/SubCard';
import Card from '../shared/components/Card';
import HeaderComponent from '../shared/components/HeaderComponent';
import Dashboardinfo from '../components/DashboardInfo';

import CardImage from '../assets/images/credit_card.png';
import PhoneImage from '../assets/images/phone_iphone.png';
import * as Dimensions from '../shared/dimension'

const PaymentMethodPage = ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>
            <HeaderComponent navigation={navigation}/>
            <Dashboardinfo navigation={navigation}/>
            <SubCard style={styles.container}
                title="Choose Payment Method"
            >
                <View style={styles.cardContainer}>
                    <Card image={PhoneImage} title="Mobile Money" navigation={navigation}/>
                    <Card image={CardImage} title="Card" navigation={navigation}/>
                </View>
            </SubCard>
        </View>
    )
}

export default PaymentMethodPage

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: -60 * Dimensions.eh,
    },
    container: {
        flex: 0.3,
        paddingTop: 60 * Dimensions.eh,
    }
})