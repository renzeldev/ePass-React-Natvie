
import DashboardPage from './pages/DashboardPage';
import OrdersListPage from './pages/OrdersListPage';
import OrderPage from './pages/OrderPage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import ForgotPasswordPage1 from './pages/auth/ForgotPasswordPage1';
import ForgotPasswordPage2 from './pages/auth/ForgotPasswordPage2';
import ForgotPasswordPage3 from './pages/auth/ForgotPasswordPage3';
import NotificationPage from './pages/NotificationsPage';
import ProfilePage from './pages/ProfilePage';

import CardPage from './pages/CardPage';
import BuyCardPage from './pages/BuyCardPage';
import BuyCardDetailPage from './pages/BuyCardDetailPage';

import OrderFuelPage from './pages/OrderFuelPage';
import OrderCardPage from './pages/OrderCardPage';
import SubCardPage from './pages/SubCardPage';
import TollPricesPage from './pages/TollPricesPage';
import ContactUsPage from './pages/ContactUsPage';
import RechargePage from './pages/RechargePage';

import PaymentMethodPage from './pages/PaymentMethodPage';
import ChooseISPPage from './pages/ChooseISPPage';
import MoneyPage from './pages/MoneyPage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './shared/components/CustomDrawerContent';
import * as Dimensions from './shared/dimension'
import { colors } from './shared/color';

const Stack = createNativeStackNavigator();

const MyTheme = {
    colors: {
        background: 'transparent',
    },
};

const AppStack = () => {
    return (

        <Stack.Navigator screenOptions={{
            headerShown: false,
            animation: 'none', // Add this line for bottom-to-top animation
        }}>
            <Stack.Screen name="login" component={LoginPage} />
            <Stack.Screen name="signup" component={SignupPage} />
            <Stack.Screen name="forgotpwd1" component={ForgotPasswordPage1} />
            <Stack.Screen name="forgotpwd2" component={ForgotPasswordPage2} />
            <Stack.Screen name="forgotpwd3" component={ForgotPasswordPage3} />
            <Stack.Screen name="home" component={DashboardPage} />
            <Stack.Screen name="orderslist" component={OrdersListPage} />
            <Stack.Screen name="order" component={OrderPage} />
            <Stack.Screen name="notification" component={NotificationPage} />
            <Stack.Screen name="profile" component={ProfilePage} />

            <Stack.Screen name="card" component={CardPage} />
            <Stack.Screen name="buycard" component={BuyCardPage} />
            <Stack.Screen name="buycarddetail" component={BuyCardDetailPage} />

            <Stack.Screen name="recharge" component={RechargePage} />
            <Stack.Screen name="payMethod" component={PaymentMethodPage} />
            <Stack.Screen name="chooseIsp" component={ChooseISPPage} />
            <Stack.Screen name="money" component={MoneyPage} />

            <Stack.Screen name="orderfuel" component={OrderFuelPage} />
            <Stack.Screen name="ordercard" component={OrderCardPage} />
            <Stack.Screen name="subcard" component={SubCardPage} />
            <Stack.Screen name="tollprice" component={TollPricesPage} />
            <Stack.Screen name="contact" component={ContactUsPage} />
        </Stack.Navigator>
    )
}

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
    
    return (
        <Drawer.Navigator
            initialRouteName='home'
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                drawerStyle: {
                    backgroundColor: colors.white,
                    width: 525 * Dimensions.ew,
                    borderTopLeftRadius: 88 * Dimensions.ew

                },
                drawerPosition: 'right',
                headerShown: false
            }}
            
            >
            <Drawer.Screen name="AppSta" component={AppStack} />

        </Drawer.Navigator>
    )
}

const Router = () => {
    return (
        <NavigationContainer theme={MyTheme}>
            <AppDrawer />
        </NavigationContainer>
    );
}


export default Router;
