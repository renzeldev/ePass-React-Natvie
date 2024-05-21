import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'
import SubCard from '../components/SubCard';
import Button from '../components/Button';
import * as RechargeService from '../shared/services/recharge';
import { useRoute } from '@react-navigation/native';
import HeaderComponent from '../shared/components/HeaderComponent';
import Dashboardinfo from '../components/DashboardInfo';

import * as Dimensions from '../shared/dimension'
import { colors } from '../shared/color';
import { useToast } from "react-native-toast-notifications";

const RechargeSubmitPage = () => {

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

    const route = useRoute();
    const isp = route.params
    const toast = useToast();

    const handleRecharge = () => {
        RechargeService.getIspRecharge({ phone: formdata.phoneNumber, amount: formdata.amount, type: isp }).then(res => {
            toast.show('Recharge successful', {
                type: 'success',
                placement: 'top',
                duration: 3000,
                offset: 30,
                animationType: 'zoom-in',
            });
        }).catch(err => {
            toast.show("Invalid recharge", {
                type: 'warning',
                placement: 'top',
                duration: 3000,
                offset: 30,
                animationType: 'zoom-in',
            });
        })
    }

    return (
        <View style={{ flex: 1 }}>
            <HeaderComponent navigation={navigation}/>
            <Dashboardinfo navigation={navigation}/>

            <SubCard style={styles.container}
                title="Recharge Account"
            >
                <SafeAreaView style={styles.cardContainer}>
                    <Text style={styles.inputLabel}>Airtel or Zemtel Number :</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={value => handleChange('phoneNumber', value)}
                        value={formdata.phoneNumber}
                        placeholder=""
                    />


                    <Text style={styles.inputLabel}>Amount:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={value => handleChange('amount', value)}
                        value={formdata.amount}
                        placeholder=""
                    />
                    <Button text="RECHARGE" style={styles.button} onPress={handleRecharge} />
                    <View>
                        <Text style={styles.cancelText}>Cancel</Text>
                    </View>
                </SafeAreaView>
            </SubCard>
        </View>
    )
}

export default RechargeSubmitPage

const styles = StyleSheet.create({
    container: {
        flex: 0.4,
        paddingTop: 40 * Dimensions.eh,
    },
    cardContainer: {
        // marginTop: 40 * Dimensions.eh,
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
        marginTop: 60 * Dimensions.eh,
        borderRadius: 50 * Dimensions.ew,
        marginHorizontal: 220 * Dimensions.ew,
    },
    cancelText: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 24 * Dimensions.ew,
        fontFamily: 'SF-Pro-Text-Regular',
    },
})