import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import security from '../../assets/images/security.png'
import { colors } from '../color'
import * as Dimension from '../dimension'
import home from '../../assets/images/drawer_home.png';
import shoppingCart from '../../assets/images/drawer_shopping_cart.png';
import notification from '../../assets/images/drawer_notification.png';
import list from '../../assets/images/drawer_list.png';
import car from '../../assets/images/drawer_car.png';
import group from '../../assets/images/drawer_group.png';
import contact from '../../assets/images/drawer_contact_support.png';
import arrow_back from '../../assets/images/arrow_back_ios.png';
import menu from '../../assets/images/drawer_menu.png';
import DrawerItem from './DrawerItem'
import { useDispatch } from 'react-redux'
import * as AuthActions from '../../store/actions/authAction';
import * as authServices from '../services/auth';

const CustomDrawerContent = ({ navigation }) => {
    const authDispatch = useDispatch();
    const drawerData = [
        {
            src: home,
            text: "Home",
            link: 'home'
        }, {
            src: shoppingCart,
            text: "Orders",
            link: 'orderlist'
        }, {
            src: notification,
            text: "Notifications",
            link: 'notification'
        }, {
            src: car,
            text: "Toll Prices",
            link: 'tollprice'
        }, {
            src: list,
            text: "List",
            link: 'home'
        }, {
            src: group,
            text: "Profile",
            link: 'profile'
        }, {
            src: contact,
            text: "Contact Us",
            link: 'contact'
        }
    ]

    const logout = () => {
        authDispatch(AuthActions.LogOut());
        authServices.Logout(navigation);
    }

    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <TouchableOpacity onPress={() => {
                    navigation.closeDrawer();
                }}>
                <Image source={menu} style={styles.menuImage} />
                </TouchableOpacity>
            </View>
            <View style={styles.horizontalLayout}>
                <Image source={security} style={styles.size} />
                <Text style={styles.titleFont}>ePass</Text>
            </View>
            {drawerData.map((card, index) => {
                return (
                    <View key={index} style={styles.cardBody}>
                        <DrawerItem card={card} navigation={navigation} />
                    </View>
                )
            })}
            <View style={styles.logout}>
                <TouchableOpacity onPress={logout}>
                    <Image source={arrow_back} style={styles.arrow_back} />
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>

        </View >
    )
}

export default CustomDrawerContent

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20 * Dimension.ew,
        flex:1
    },
    horizontalLayout: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20 * Dimension.eh,
        marginBottom: 131 * Dimension.eh
    },
    titleFont: {
        color: colors.blue,
        fontSize: 36,
        fontWeight: '700',
        marginLeft: 30 * Dimension.ew,
        fontFamily: 'SF-Pro-Text-Regular',
        letterSpacing: 6.9 * Dimension.ew,

    },
    size: {
        width: 107 * Dimension.ew,
        height: 107 * Dimension.ew,
    },
    logout: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        marginLeft: 30 * Dimension.ew,
        marginBottom: 30 * Dimension.eh
    },
    arrow_back: {
        width: 64 * Dimension.ew,
        height: 64 * Dimension.ew
    },
    logoutText: {
        color: colors.blue,
        fontSize: 40 * Dimension.ew,
        fontWeight: '800',
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 123 * Dimension.eh,
        marginRight: 10 * Dimension.ew
    },
    menuImage: {
        width: 40 * Dimension.ew,
        height: 40 * Dimension.ew
    }
})