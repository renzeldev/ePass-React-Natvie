import React from 'react';
import * as Dimension from '../dimension';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../color';
import { Button } from '@ant-design/react-native'

const MainThread = (Props) => {
    return (
        <View style={styles.mainBoard}>
            <Props.Component {...Props}/>
        </View>
    )
}

const styles = StyleSheet.create({
   mainBoard: {
    borderTopLeftRadius: 75 * Dimension.ew,
    borderTopRightRadius: 75 * Dimension.ew,
    backgroundColor: colors.white,
   },
});

export default MainThread;