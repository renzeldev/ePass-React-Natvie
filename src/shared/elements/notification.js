import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Toast from 'react-native-root-toast';
import * as Dimensions from '../dimension'

export const ShowToast = (opt) => {
    const colors = {
        success:'#22BB33',
        warning:'#f0ad4e',
        other:'#rgba(0,0,0,0.8)'
    }
    Toast.show(opt.title, {
        containerStyle: styles.containerStyle,
        duration: opt.duration ? opt.duration : 2000,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 500,
        backgroundColor: colors[`${opt.type}`],
        shadowColor: '#ccc',
        textColor: 'white',
        onPress: () => {
          alert('You clicked me!')
        },
    });
}

const styles = StyleSheet.create({
    containerStyle: {
        width: 400 * Dimensions.ew,
    },
})