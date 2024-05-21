import { StyleSheet, Text, View, SafeAreaView, TextInput, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import SubCard from '../components/SubCard';
import LongCard from '../shared/components/LongCard';
import Button from '../components/Button';
import { Card } from '@ui-kitten/components';

import * as Dimensions from '../shared/dimension'
import { colors } from '../shared/color';
import Arrow from '../assets/images/arrow_forward_ios.png'
import BaseStyle from '../shared/baseStyle'
import * as RechargeService from '../shared/services/recharge'
import { useToast } from "react-native-toast-notifications";

const RechargePage = ({navigation}) => {
    const [formdata, setFormData] = useState({
        amount: '',
        phoneNumber: '',
    })

    const handleChange = (name, value) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }))
    }

    const toast = useToast();

    const recharge = () => {
        if (formdata.amount && formdata.phoneNumber) {
            RechargeService.getRecharge({ amount: formdata.amount, phoneNumber: formdata.phoneNumber }).then(res => {
                toast.show("Recharge successful", {
                    type: 'success',
                    placement: 'top',
                    duration: 3000,
                    offset: 30,
                    animationType: 'zoom-in',
                });
            }).catch(err => {
                toast.show('Invalid request', {
                    type: 'warning',
                    placement: 'top',
                    duration: 3000,
                    offset: 30,
                    animationType: 'zoom-in',
                })
            });
        }
    }
    const subTitle = (
        <Text style={BaseStyle.subText}>MTN - Official ePass Payment Partner. Top up your account for free using MTN MoMo.</Text>)

    return (
        <View style={{ flex: 1 }}>
            <SubCard style={styles.container}
                title="Recharge Account"
                subTitle={subTitle}
            >
                <SafeAreaView style={styles.cardContainer}>
                    <Text style={styles.inputLabel}>Phone Number:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={value => handleChange('amount', value)}
                        value={formdata.amount}
                        placeholder=""
                    />

                    <Text style={styles.inputLabel}>Amount (ZMW):</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={value => handleChange('phoneNumber', value)}
                        value={formdata.phoneNumber}
                        placeholder=""
                    />
                    <Button text="Recharge" style={styles.button} onPress={recharge} />
                    <View>
                        <Text style={styles.cancelText}>Cancel</Text>
                    </View>
                    <LongCard text="Airtel, Zemtel and Bank Card" image={Arrow} style={styles.longCard} navigation={navigation} navigate="payMethod"/>
                </SafeAreaView>
            </SubCard>
        </View>
    )
}

export default RechargePage

const styles = StyleSheet.create({
    container: {
        flex: 0.63,
        paddingTop: 80 * Dimensions.eh,
    },
    cardContainer: {
        marginTop: 40 * Dimensions.eh,
    },
    input: {
        height: 70 * Dimensions.eh,
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
    button: {
        marginTop: 80 * Dimensions.eh,
        borderRadius: 50 * Dimensions.ew,
        marginHorizontal: 220 * Dimensions.ew,
    },
    cancelText: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 24 * Dimensions.ew,
        fontFamily: 'SF-Pro-Text-Regular',
    },
    longCard: {
        marginTop: 80 * Dimensions.eh,
        marginBottom: 30 * Dimensions.eh,
    },

})