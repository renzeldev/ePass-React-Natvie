import { StyleSheet, Text, View, SafeAreaView, TextInput, Alert, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import SubCard from '../components/SubCard';
import SelectComponent from '../components/SelectComponent';

import * as Dimensions from '../shared/dimension'
import { colors } from '../shared/color';
import BaseStyle from '../shared/baseStyle';
import { useRoute } from '@react-navigation/native';
import HeaderComponent from '../shared/components/HeaderComponent';
import Dashboardinfo from '../components/DashboardInfo';
import * as fuelStationService from '../shared/services/fuel_station'
import * as OrderService from '../shared/services/orderService'
import { useToast } from "react-native-toast-notifications";

const OrderCardPage = ({ navigation }) => {

    const route = useRoute();
    const cardInfo = route.params.data;
    const [provinceStationsLists, setProvinceStationsLists] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [stations, setStations] = useState([]);
    const [formdata, setFormData] = useState({
        amount: '',
        numberPlate: '',
        phoneNumber: '',
    })
    const toast = useToast()

    const recharge = () => {
        OrderService.addOrder({
            type: 'buy-fuel',
            amount: 35,
            qty: 1,
            phone: +'260977223510',
            delivery: true,
            address: 'Lusaka',
            city: 'Olympia',
            province: 'Katanga',
            station: 'fillingStations',
            provider: cardInfo.name,
            cost: 50,
            ref: 'Reference123',
            vendor: cardInfo.name,
            vehicles: ["numberPlate", ""],
            item: "FuelItem"
        })
            .then(res => {
                toast.show("New order successful", {
                    type: 'success',
                    placement: 'top',
                    duration: 3000,
                    offset: 30,
                    animationType: 'zoom-in',
                })
            }).catch(err => {
                toast.show('Invalid request', {
                    type: 'warning',
                    placement: 'top',
                    duration: 3000,
                    offset: 30,
                    animationType: 'zoom-in',
                })
            })
    }

    useEffect(() => {
        fuelStationService.getProvinceStations().then((data) => {
            setProvinceStationsLists(data.docs);
            // Alert.alert("", response.length);
            let list = [];
            data.docs.map(item => {
                if (list.indexOf(item.province) < 0) {
                    // list.push(item.province);
                    list.push(item.province);
                }
            })
            if (list.length > 0) {
                setProvinces(list);
            }
            // data.docs.map(item => {
            //     if(provinces.indexOf(item.province) < 0) {
            //         // list.push(item.province);
            //         setProvinces(provinces => provinces.concat(item.province));
            //     }
            // })
            // setProvinces(data);
        })
        // setProvinces(cardInfo.provinces);
    }, [])

    const handleChange = (name, value) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }))
    }

    const filterStations = (provinceName) => {
        let stations = [];
        provinceStationsLists.map(provinceStation => {
            if (provinceStation.province === provinceName) {
                stations.push(provinceStation.name);
            }
        })
        if (stations.length > 0) {
            setStations(stations);
        }
        // setStations(provinces.filter(province => province.name === provinceName)[0].stations);
    }

    const subTitle = (
        <Text style={BaseStyle.subText}>Service available from 08:00 to 16:00 Fuel Provider: <Text style={{ fontWeight: '600', fontFamily: 'SF-Pro-Text-Regular' }}>{cardInfo.name}</Text></Text>)
    return (
        <>
            <HeaderComponent navigation={navigation} />
            <Dashboardinfo navigation={navigation} />
            <View style={{ flex: 1 }}>
                <SubCard style={styles.container}
                    title="Order Discounted Fuel"
                    subTitle={subTitle}
                >
                    <SafeAreaView style={styles.cardContainer}>
                        <Text style={styles.inputLabel}>Amount (Pump price = K19.0 per litre)</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={value => handleChange('amount', value)}
                            value={formdata.amount}
                            placeholder=""
                        />
                        <Text style={styles.inputLabel}>Number Plate</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={value => handleChange('numberPlate', value)}
                            value={formdata.numberPlate}
                            placeholder=""
                        />
                        <Text style={styles.inputLabel}>Phone Number</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={value => handleChange('phoneNumber', value)}
                            value={formdata.phoneNumber}
                            placeholder=""
                        />
                        <Text style={styles.inputLabel}>Province</Text>
                        <SelectComponent data={provinces} clickItem={(name) => { filterStations(name) }} />
                        <Text style={styles.inputLabel}>Preferred Filling Station</Text>
                        <SelectComponent data={stations} clickItem={() => { }} />
                        <View style={{ marginTop: 70 * Dimensions.eh }}>
                            <View style={styles.text}>
                                <Text style={styles.inputLabel}>Original Price No. of Litres</Text>
                                <Text>0</Text>
                            </View>
                            <View style={styles.text}>
                                <Text style={styles.inputLabel}>Discounted Price No. of Litres</Text>
                                <Text>0</Text>
                            </View>
                        </View>
                        <View style={{ display: 'flex', alignItems: 'center' }}>
                            <TouchableOpacity style={styles.buttonStyle} onPress={recharge} >
                                <Text style={styles.buttonTitle}>RECHARGE</Text>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                </SubCard>
            </View>
        </>
    )
}

export default OrderCardPage

const styles = StyleSheet.create({
    container: {
        paddingTop: 60 * Dimensions.eh,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        minHeight: 1150 * Dimensions.eh
    },
    cardContainer: {
        marginTop: 90 * Dimensions.eh,
    },
    input: {
        height: 60 * Dimensions.eh,
        backgroundColor: 'rgba(153, 153, 153, 0.05)',
        padding: 16 * Dimensions.ew,
        borderRadius: 5,
        borderColor: 'rgba(228, 228, 228, 0.60)',
        borderWidth: 1,
    },
    inputLabel: {
        marginVertical: 10 * Dimensions.eh,
        fontSize: 24 * Dimensions.ew,
        color: colors.blue,
        fontWeight: '500',
        fontFamily: 'SF-Pro-Text-Regular',
    },
    text: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonStyle: {
        marginTop: 12 * Dimensions.eh,
        marginBottom: 56 * Dimensions.eh,
        width: 214 * Dimensions.ew,
        height: "auto",
        paddingVertical: 15 * Dimensions.eh,
        borderRadius: 50 * Dimensions.eh,
        backgroundColor: colors.yellow,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTitle: {
        fontSize: 20 * Dimensions.eh,
        fontWeight: '600',
        color: colors.blue,
        textAlign: 'center',
        fontFamily: 'SF-Pro-Text-Regular',
    }
})