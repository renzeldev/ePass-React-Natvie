import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ContactCard from '../shared/components/ContactCard';
import MainThread from '../shared/components/MainThread'
import * as Dimension from '../shared/dimension'


const ContactUsComponent = () => {
    return (
        <MainThread Component={ChildComponent} />
    )
}

const ChildComponent = ({ navigation }) => {
    const cardData = [
        {
            image: 'phone',
            type: 'Phone',
            description: '+260962281630'
        },
        {
            image: 'phone',
            type: 'WhatsApp',
            description: '+260962281630'
        },
        {
            image: 'email',
            type: 'Email',
            description: 'info@dczambia.com'
        },

    ]
    return (
        <View style={styles.container}>
            {cardData.map((card, index) => {
                return (
                    <View key={index} style={styles.cardBody}>
                        <ContactCard card={card} navigation={navigation} style={styles.cardStyle} />
                    </View>
                )
            })}
        </View>
    )

};

export default ContactUsComponent

const styles = StyleSheet.create({
    container: {
        paddingTop: 120 * Dimension.eh,
        height: 850 * Dimension.eh,
    },
    cardBody: {
        paddingHorizontal: 25 * Dimension.ew,
    },
    cardStyle: {
        marginBottom: 20 * Dimension.eh,
        // height: 150 * Dimension.eh,
    }
})