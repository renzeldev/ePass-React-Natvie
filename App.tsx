/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect, useRef } from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { Provider } from 'react-redux'
import store from './src/store/configureStore';

import BgGradient from './src/assets/images/background-gradient.png';

import { colors } from './src/shared/color';
import * as Dimension from './src/shared/dimension';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import {ToastProvider} from 'react-native-toast-notifications';
import Routes from './src/router';
import DrawerLayout from './src/shared/elements/drawerLayout';
import MenuComponent from './src/shared/components/MenuComponent'

function App(): React.JSX.Element {

  
  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <View style={styles.backgroundStyle}>
            <ImageBackground
              source={BgGradient}
              style={{ flex: 1, width: Dimension.W, height: Dimension.H }}>
              {/* <DrawerLayout /> */}
            
                <ToastProvider>
              <Routes />
              </ToastProvider>
          </ImageBackground>
          </View>
        </TouchableWithoutFeedback>
      </ApplicationProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: colors.blue,
    flex: 1,
    position: 'relative',
    // height: Dimension.H,
    // alignItems: "center",
  },
  headerStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  inlineStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoSize: {
    width: 55 * Dimension.ew,
    height: 55 * Dimension.ew,
  },
});

export default App;
