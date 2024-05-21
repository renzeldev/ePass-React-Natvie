import { View, Image, Text, StyleSheet } from 'react-native';
import { colors } from '../color';
import * as Dimension from '../dimension';
import logo from '../../assets/images/logo.png';
import menu from '../../assets/images/menu.png';


const MenuComponent = () => {
  return (
    <View style={styles.headerStyle}>
      <View style={styles.inlineStyle}>
        <Image source={logo} style={styles.logoSize} />
        <Text style={{ color: colors.white, fontSize: 30 * Dimension.ew, fontFamily: 'SF-Pro-Text-Regular', marginLeft: 10 * Dimension.ew, letterSpacing:3 * Dimension.ew }}>ePass</Text>
      </View>
      <View>
        <Image source={menu} style={styles.logoSize} />
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

export default MenuComponent;