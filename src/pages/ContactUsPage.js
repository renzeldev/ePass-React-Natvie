import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import baseStyles from '../shared/baseStyle';
import Tabbar from '../components/Tabbar';
import * as Dimension from '../shared/dimension';
import { colors } from '../shared/color';
import HeaderComponent from '../shared/components/HeaderComponent';
import ContactUsComponent from '../components/ContactUsComponent';

const ContactUsPage = ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>
            <HeaderComponent navigation={navigation}/>
            <View style={baseStyles.titleFieldStyle}>
                <Text style={styles.titleStyle}>Contact Us</Text>
                <Text style={styles.subText}>Business Hours</Text>
                <Text style={styles.subText}>Mon-Fri, 09:00 - 17:00.</Text>

            </View>
            <View style={baseStyles.fixedBottom}>
                <ContactUsComponent />
                <Tabbar navigation={navigation} />
            </View>
        </View>
    )
}

export default ContactUsPage

const styles = StyleSheet.create({
    titleStyle: {
        color: colors.white,
        textAlign: "center",
        fontSize: 64 * Dimension.ew,
        fontWeight: "800",
        fontFamily: 'SF-Pro-Text-Regular',
    },
    subText: {
        color: colors.white,
        fontWeight: '500',
        fontSize: 30 * Dimension.ew,
        fontFamily: 'SF-Pro-Text-Regular',
    }
})