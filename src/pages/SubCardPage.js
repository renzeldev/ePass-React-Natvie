import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SubCard from '../components/SubCard';
import CardComponent from '../shared/components/CardComponent';
import Petrol from '../assets/images/local_gas_station_green.png';
import Diesel from '../assets/images/local_gas_station_yellow.png';
import * as Dimensions from '../shared/dimension'
import { Layout } from '@ui-kitten/components';
import { useRoute } from '@react-navigation/native';
import BaseStyle from '../shared/baseStyle';
import HeaderComponent from '../shared/components/HeaderComponent';
import Dashboardinfo from '../components/DashboardInfo';

const SubCardPage = ({ navigation }) => {

    const route = useRoute();
    const cardInfo = route.params;
    const subTitle = (
        <Text style={BaseStyle.subText}>Service available from 08:00 to 16:00 Fuel Provider: <Text style={{ fontWeight: '600', fontFamily: 'SF-Pro-Text-Regular' }}>{cardInfo.name}</Text></Text>)
    return (
        <View style={{ flex: 1 }}>
            <HeaderComponent navigation={navigation}/>
            <Dashboardinfo navigation={navigation}/>

            <SubCard style={styles.container}
                title="Order Discounted Fuel"
                subTitle={subTitle}
            >
                <View style={styles.cardContainer}>
                    <CardComponent image={Petrol} titleColor={{ color: '#027C00' }} title="Petrol" style={styles.size} navigate="ordercard" navigation={navigation} data={cardInfo} />
                    <CardComponent image={Diesel} titleColor={{ color: '#8E9000' }} title="Diesel" style={styles.size} navigate="ordercard" navigation={navigation} data={cardInfo} />
                </View>

            </SubCard>
        </View>
    )
}

export default SubCardPage

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container: {
        flex: 0.53,
        paddingTop: 40 * Dimensions.eh,
    },
    size: {
        width: 317 * Dimensions.ew,
        height: 264 * Dimensions.eh,
    },

})