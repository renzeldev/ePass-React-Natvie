import { StyleSheet } from 'react-native';
import * as Dimension from '../shared/dimension'
import { colors } from './color';

const styles = StyleSheet.create({
    fixedBottom : {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right:0
    },
    titleFieldStyle: {
        height: 400 * Dimension.eh,
        display: "flex",
        justifyContent:'center',
        alignItems: 'center',
    },
    center: {
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
    },
    subText: {
        paddingHorizontal: 40 * Dimension.ew,
        marginTop: 30 * Dimension.eh,
        fontSize: 24 * Dimension.ew,
        textAlign: 'center',
        color: colors.blue,
        fontWeight: '500',
        fontFamily: 'SF-Pro-Text-Regular',
    },
});

export default styles;