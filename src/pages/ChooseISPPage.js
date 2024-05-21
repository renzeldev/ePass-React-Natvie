import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SubCard from '../components/SubCard';
import * as Dimensions from '../shared/dimension'
import LongCard from '../shared/components/LongCard';
import Arrow from '../assets/images/arrow_forward_ios.png'
import HeaderComponent from '../shared/components/HeaderComponent';
import Dashboardinfo from '../components/DashboardInfo';

const ChooseISPPage = ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>
            <HeaderComponent navigation={navigation}/>
            <Dashboardinfo navigation={navigation}/>

            <SubCard style={styles.container}
                title="Please Choose Your ISP"
            >
                <View>
                    <LongCard text="MTN" image={Arrow} style={styles.longCard} navigation={navigation} navigate="money" data = {"MTN"}/>
                    <LongCard text="AIRTEL" image={Arrow} style={styles.longCard} navigation={navigation} navigate="money" data = {"AIRTEL"}/>
                    <LongCard text="ZEMTEL" image={Arrow} style={styles.longCard} navigation={navigation} navigate="money" data = {"ZEMTEL"}/>
                </View>
            </SubCard>
        </View>
    )
}

export default ChooseISPPage

const styles = StyleSheet.create({
    container: {
        flex: 0.4,
        paddingTop: 80 * Dimensions.eh,
    },
    longCard: {
        marginBottom: 25 * Dimensions.eh,
    }
})