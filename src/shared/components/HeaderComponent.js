import { View, Image, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { colors } from '../color';
import * as Dimension from '../dimension';
import logo from '../../assets/images/logo.png';
import menu from '../../assets/images/menu.png';
import { useDrawerStatus } from '@react-navigation/drawer';

const HeaderComponent = (props) => {
  const isDrawerOpen = useDrawerStatus() === 'open';
  return (
    <View style={styles.headerStyle}>
      <View style={styles.inlineStyle}>
        <Image source={logo} style={styles.logoSize} />
        <Text style={{ color: colors.white, fontSize: 30 * Dimension.ew, fontFamily: 'SF-Pro-Text-Regular', marginLeft: 10 * Dimension.ew, letterSpacing: 3 * Dimension.ew }}>ePass</Text>
      </View>
      <View >
        <TouchableOpacity onPress={() => {
          props.navigation.openDrawer();
          // Alert.alert('DrawerStatus', isDrawerOpen)
        }}>
          <Image source={menu} style={styles.logoSize} />
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: colors.blue,
  },
  headerStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 100 * Dimension.eh,
    paddingHorizontal: 30 * Dimension.ew,
    // padding: 10,
  },
  inlineStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logoSize: {
    width: 55 * Dimension.ew,
    height: 55 * Dimension.ew,
  }
});

export default HeaderComponent;