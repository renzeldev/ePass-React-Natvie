import React, { useState } from 'react';
import * as Dimension from '../shared/dimension';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { colors } from '../shared/color';
import MainThread from '../shared/components/MainThread';
import BaseStyle from '../shared/baseStyle';
import { Toggle, Input } from '@ui-kitten/components';
import { useToast } from "react-native-toast-notifications";
import * as AddOrderService from '../shared/services/newOrder';

const BuyCardDetailPageComponent = (props) => {
    return (
        <MainThread Component={ChildComponent} navigation={props.navigation} card={props.card} />
    )
}

const ChildComponent = (props) => {
    const [isAddress, setIsAddress] = useState(false);
    const [qty, setQty] = useState('1');

    const [town, setTown] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('')

    const onChangeTown = town => setTown(town)
    const onChangePhone = phone => setPhone(phone)
    const onChangeAddress = address => setAddress(address)

    const toast = useToast();

    const {card} = props;

    const minusQty = () => {
        if (parseInt(qty) > 1) {
            setQty(parseInt(qty) - 1);
        }
    }
    const plusQty = () => {
        setQty(parseInt(qty) + 1);
    }

    const newOrder = () => {
        if (town && phone) {
            AddOrderService.addOrder({ town, phone, address, qty, cost: card.price, type:card.type }).then(res => {
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
    }
    return (

        <View style={styles.mainBoard}>
            <Text style={styles.titleStyle}>Buy Card - {card.type} - NRFA</Text>
            <View style={styles.mainView}>
                <View style={styles.inlineStyle}>
                    <Text style={styles.mediumTitle}>Card Price</Text>
                    <Text style={styles.mediumTitle}>{card.price}</Text>
                </View>
                <View style={styles.inlineStyle}>
                    <Text style={styles.mediumTitle}>Card Type</Text>
                    <Text style={styles.mediumTitle}>{card.type} card</Text>
                </View>
                <View style={styles.inlineStyle}>
                    <Text style={styles.mediumTitle}>QTY</Text>
                    <View style={{ display: "flex", flexDirection: 'row' }}>
                        <TouchableOpacity onPress={minusQty}>
                            <View style={styles.tinyButton}>
                                <Text style={styles.mediumTitle}>-</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.tinyButton}>
                                <Text style={styles.mediumTitle}>{qty}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={plusQty}>
                            <View style={styles.tinyButton}>
                                <Text style={styles.mediumTitle}>+</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.inlineStyle}>
                    <Text style={styles.mediumTitle}>Add Home Delivery?</Text>
                    <Toggle
                        style={styles.toggle}
                        status='warning'
                        checked={isAddress}
                        onChange={(value) => { setIsAddress(!isAddress); setAddress(''); }}
                    // {...selectHomeDelivery}
                    >
                    </Toggle>
                </View>
                <Input
                    style={styles.inputStyle}
                    value={town}
                    label={() => { return <Text style={{ fontSize: 24 * Dimension.eh, fontWeight: '500', fontFamily: 'SF-Pro-Text-Regular', color: colors.blue }}>Town/City:</Text> }}
                    onChangeText={onChangeTown}
                />
                <Input
                    style={styles.inputStyle}
                    value={phone}
                    label={() => { return <Text style={{ fontSize: 24 * Dimension.eh, fontWeight: '500', fontFamily: 'SF-Pro-Text-Regular', color: colors.blue }}>Phone:</Text> }}
                    onChangeText={onChangePhone}
                />
                {
                    isAddress ? (
                        <View style={{ height: 200 * Dimension.eh }}>
                            <Input
                                style={styles.inputStyle}
                                value={address}
                                label={() => { return <Text style={{ fontSize: 24 * Dimension.eh, fontWeight: '500', color: colors.blue }}>Address:</Text> }}
                                onChangeText={onChangeAddress}
                            />
                        </View>
                    ) : (
                        <View style={{ height: 200 * Dimension.eh }}>
                            <Text style={{ marginBottom: 30 * Dimension.eh, fontFamily: 'SF-Pro-Text-Regular', color: colors.blue }}>Card can be picked up from Click and Connect Zambia Ltd in Lusaka.</Text>

                            <Text style={{ marginBottom: 30 * Dimension.eh, color: colors.blue }}>Click and Connect: 30 Manda Hill rd, Olympia
                                {'\n'}Book Now Zambia: Suit 5, 46 Kudu Road, Kabulonga</Text>
                        </View>
                    )
                }


                <View style={BaseStyle.center}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={newOrder}><Text style={styles.buttonTitle}>SUBMIT</Text></TouchableOpacity>
                </View>
            </View>
        </View>
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
        marginTop: 29 * Dimension.eh,
        marginBottom: 19 * Dimension.eh,
        textAlign: 'center',
        textTransform: 'capitalize',
    },
    buttonTitle: {
        fontSize: 24 * Dimension.eh,
        fontWeight: '600',
        color: colors.blue,
        textAlign: 'center',
        fontFamily: 'SF-Pro-Text-Regular',
    },
    mediumTitle: {
        color: colors.blue,
        fontSize: 30 * Dimension.ew,
        fontWeight: '700',
        fontFamily: 'SF-Pro-Text-Regular',
        textTransform: 'capitalize',
    },
    mainView: {
        // maxHeight: 800 * Dimension.eh,
        marginVertical: 15 * Dimension.eh,
        paddingHorizontal: 36 * Dimension.ew,
    },
    buttonStyle: {
        marginTop: 18 * Dimension.eh,
        marginBottom: 56 * Dimension.eh,
        width: 150,
        height: "auto",
        paddingVertical: 18 * Dimension.eh,
        paddingHorizontal: 50 * Dimension.ew,
        borderRadius: 50 * Dimension.eh,
        backgroundColor: colors.yellow,
    },
    inlineStyle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 30 * Dimension.eh,
    },
    tinyButton: {
        backgroundColor: colors.yellow,
        marginLeft: 2,
        width: 45 * Dimension.ew,
        height: 52 * Dimension.eh,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    toggle: {
        // backgroundColor: colors.yellow
    },
    inputStyle: {
        marginBottom: 26 * Dimension.eh
    }

});

export default BuyCardDetailPageComponent;