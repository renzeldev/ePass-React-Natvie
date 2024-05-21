import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import * as Dimension from '../../shared/dimension';
import { colors } from '../../shared/color';
import VerifycationBox from '../../components/VerifycationBox';
import * as authService from '../../shared/services/auth';
import { useToast } from "react-native-toast-notifications";

const ForgotPasswordPage2 = ({ navigation }) => {

  const [opt, setOpt] = useState('')
  const toast = useToast();
  const verify = () => {
    authService.VerifyPassword(opt).then(res => {
      toast.show('Verified account', {
        type: 'success',
        placement: 'top',
        duration: 3000,
        offset: 30,
        animationType: 'zoom-in',
      });
      navigation.navigate("forgotpwd3", {data: opt});
    }).catch(err => {
      toast.show("Invalid the pin", {
        type: 'warning',
        placement: 'top',
        duration: 3000,
        offset: 30,
        animationType: 'zoom-in',
      });
    })

  }
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Verify account</Text>
        <Text style={styles.subText}>
          Please enter the
          <Text style={styles.containText}> CODE </Text>
          sent to your Email/ phone number in the boxes below.
        </Text>
      </View>
      <View style={styles.inputPassword}>
        <VerifycationBox handleOpt={(v) => setOpt(opt + v)} />
      </View>
      <View style={styles.footer}>
        <Button text="verify" onPress={verify} />
      </View>
    </View>
  );
};

export default ForgotPasswordPage2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 180 * Dimension.eh,
  },
  content: {
    flex: 0.2,
    alignItems: 'center',
    marginTop: 40 * Dimension.eh,
  },
  text: {
    color: colors.white,
    fontWeight: '800',
    fontSize: 28,
    fontFamily: 'SF-Pro-Text-Regular',
    marginBottom: 20 * Dimension.eh,
    textTransform: 'capitalize',
  },
  subText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'SF-Pro-Text-Regular',
    textAlign: 'center',
    marginHorizontal: 50 * Dimension.ew,
    textTransform: 'capitalize',
  },
  containText: {
    color: colors.yellow,
    textTransform: 'uppercase',
    fontFamily: 'SF-Pro-Text-Regular',
  },
  inputPassword: {
    flex: 0.2,
    marginHorizontal: 120 * Dimension.ew,
    marginTop: 50 * Dimension.eh,
  },
  inputLabel: {
    fontSize: 16,
    color: colors.white,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  footer: {
    flex: 0.4,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  input: {
    backgroundColor: colors.white,
    padding: 16 * Dimension.ew,
    borderRadius: 5,
    borderColor: colors.gray,
    borderWidth: 1,
  },
});
