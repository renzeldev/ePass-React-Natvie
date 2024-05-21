import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'
import SubCard from '../components/SubCard';
import Button from '../components/Button';

import * as Dimensions from '../shared/dimension'
import { colors } from '../shared/color';
import BaseStyle from '../shared/baseStyle';

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

    const subTitle = (
        <Text style={BaseStyle.subText}>"You will be redirected to a site where you can input the Visa or Mastercard information to complete the transaction."</Text>)

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

                    <Text style={styles.inputLabel}>Amount:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={value => handleChange('phoneNumber', value)}
                        value={formdata.phoneNumber}
                        placeholder=""
                    />
                    <Button text="Submit" style={styles.button}/>
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
        flex: 0.5,
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
})