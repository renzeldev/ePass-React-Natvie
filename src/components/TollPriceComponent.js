import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InlineText from '../shared/components/InlineText'
import MainThread from '../shared/components/MainThread'
import * as Dimension from '../shared/dimension'

const TollPriceComponent = ({tollPrices}) => {
    return (
        <MainThread Component={ChildComponent} tollPrices={tollPrices}/>
    )
}

const ChildComponent = ({tollPrices}) => {
    return (
        <View style={styles.container}>
            {
                tollPrices.length > 0 && tollPrices.map((price, index) => {
                    return (
                        <InlineText key={index} type={price.vehicleType} price={price.price} />
                    )
                })
            }
            {/* <InlineText type="Small Private Vehicle" price="k20" />
            <InlineText type="Abnormal Loads" price="k500" />
            <InlineText type="Heavy Vehicles with Semi-Trailer" price="k150" />
            <InlineText type="Light Trucks" price="k50" />
            <InlineText type="Buses Above 30 Seats" price="k50" />
            <InlineText type="Buses (16 to 30)" price="k50" /> */}
        </View>
    )

};

export default TollPriceComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height: 850 * Dimension.eh,
        paddingTop: 130 * Dimension.eh,
        paddingHorizontal: 40 * Dimension.ew,
    },
})