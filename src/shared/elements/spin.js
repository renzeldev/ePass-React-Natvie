import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const spin = ({ text }) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator
                color="#006688"
                size='large' />
            <Text style={{ color: 'black' }}>
                {text}
            </Text>
        </View>
    )
}


export default spin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center'
    }
})