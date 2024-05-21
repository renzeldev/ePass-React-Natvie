import React, { useState, useEffect } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import tabBarImages from '../shared/tabBarImages'
import * as Dimensions from '../shared/dimension'
import { useRoute } from '@react-navigation/native'

const Tabbar = ({navigation}) => {

    const route = useRoute();
    const [selectedTab, setSelectedTab] = useState('home');

    const onChangeTab = (tabName) => {
        setSelectedTab(tabName);
    }

    useEffect(() => {
        const routeName = route.name;
        setSelectedTab(routeName);
    }, [])

    return (
        <View style={styles.menuBoard}>
            <TouchableOpacity onPress={() => { navigation.navigate("home") }}>
                {
                    selectedTab === "home" ? (
                        <View style={styles.imageGroupStyle}>
                            <Image style={styles.imageStyle} source={tabBarImages.selectedHome} />
                            <Image style={styles.ellipseStyle} source={tabBarImages.ecllipse} />
                        </View>
                    ) : (
                        <Image style={[styles.imageStyle, { marginBottom: 26 * Dimensions.eh }]} source={tabBarImages.home} />
                    )
                }
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("list") }}>
                {
                    selectedTab === "list" ? (
                        <View style={styles.imageGroupStyle}>
                            <Image style={styles.imageStyle} source={tabBarImages.selectedList} />
                            <Image style={styles.ellipseStyle} source={tabBarImages.ecllipse} />
                        </View>
                    ) : (
                        <Image style={[styles.imageStyle, { marginBottom: 26 * Dimensions.eh }]} source={tabBarImages.list} />
                    )
                }
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("orderslist") }}>
                {
                    selectedTab === "orderslist" || selectedTab === 'order' ? (
                        <View style={styles.imageGroupStyle}>
                            <Image style={styles.imageStyle} source={tabBarImages.selectedShoppingCart} />
                            <Image style={styles.ellipseStyle} source={tabBarImages.ecllipse} />
                        </View>
                    ) : (
                        <Image style={[styles.imageStyle, { marginBottom: 26 * Dimensions.eh }]} source={tabBarImages.shoppingCart} />
                    )
                }
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("notification") }}>
                {
                    selectedTab === "notification" ? (
                        <View style={styles.imageGroupStyle}>
                            <Image style={styles.imageStyle} source={tabBarImages.selectedNotification} />
                            <Image style={styles.ellipseStyle} source={tabBarImages.ecllipse} />
                        </View>
                    ) : (
                        <Image style={[styles.imageStyle, { marginBottom: 26 * Dimensions.eh }]} source={tabBarImages.notification} />
                    )
                }
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("profile") }}>
                {
                    selectedTab === "profile" ? (
                        <View style={styles.imageGroupStyle}>
                            <Image style={styles.imageStyle} source={tabBarImages.selectedProfile} />
                            <Image style={styles.ellipseStyle} source={tabBarImages.ecllipse} />
                        </View>
                    ) : (
                        <Image style={[styles.imageStyle, { marginBottom: 26 * Dimensions.eh }]} source={tabBarImages.profile} />
                    )
                }
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainStyle: {
        zIndex: 10,
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
    },
    imageStyle: {
        width: 64 * Dimensions.eh,
        height: 64 * Dimensions.eh
    },
    ellipseStyle: {
        marginTop: 10 * Dimensions.eh,
        width: 16 * Dimensions.eh,
        height: 16 * Dimensions.eh
    },
    imageGroupStyle: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    menuBoard: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 40 * Dimensions.eh,
        paddingBottom: 42* Dimensions.eh,
    },
});

export default Tabbar;
