import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import baseStyles from '../shared/baseStyle';
import OrderFuelCard from '../components/OrderFuelCard';
import Dashboardinfo from '../components/DashboardInfo';
import HeaderComponent from '../shared/components/HeaderComponent';
import * as FuelStationService from '../shared/services/fuel_station';

const OrderFuelPage = ({ navigation }) => {

    const [ providers, setProviders ] = useState([]);
    useEffect(() =>{
        FuelStationService.getProviders().then((data) => {
            setProviders(data.docs);
        })
        .catch(err => {
            ShowToast({ type: 'warning', title: 'Failed to load cards', duration: 1000 });
        })
    },[])
    return (
        <>
            <HeaderComponent navigation={navigation}/>
            <Dashboardinfo navigation={navigation}/>
            <View style={{ flex: 1 }}>
                <View style={baseStyles.fixedBottom}>
                    <OrderFuelCard navigation={navigation} providers={providers}/>
                </View>
            </View>
        </>

    )
}

export default OrderFuelPage
