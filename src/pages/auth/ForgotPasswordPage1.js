import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import * as Dimension from '../../shared/dimension';
import { colors } from '../../shared/color';
import * as authService from '../../shared/services/auth';
import { useToast } from "react-native-toast-notifications";

const ForgotPasswordPage1 = ({ navigation }) => {

  const [username, setUsername] = useState('');
  const onChangeEmail = value => setUsername(value);

  const toast = useToast();

  const recover_password = () => {

    authService.RecoverPassword(username).then(res => {
      toast.show(res, {
        type: 'success',
        placement: 'top',
        duration: 3000,
        offset: 30,
        animationType: 'zoom-in',
      });
      navigation.navigate("forgotpwd2");
    }).catch(err => {
      toast.show("Confirm your email or phone number", {
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
        <Text style={styles.text}>Forgot password?</Text>
        <Text style={styles.subText}>
          Please enter your email or phone number to recover your password.
        </Text>
      </View>
      <View style={styles.inputPassword}>
        <Text style={styles.inputLabel}>Email or phone number:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={username}
        />
      </View>
      <View style={styles.footer}>
        <Button text="recover password" onPress={recover_password} />
      </View>
    </View>
  );
};

export default ForgotPasswordPage1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 170 * Dimension.eh,
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
  inputPassword: {
    flex: 0.2,
    flexDirection: 'column',
    marginHorizontal: 30 * Dimension.ew,
  },
  inputLabel: {
    fontSize: 16,
    color: colors.white,
    fontWeight: '500',
    fontFamily: 'SF-Pro-Text-Regular',
    textTransform: 'capitalize',
    marginVertical: 10 * Dimension.eh,
  },
  footer: {
    flex: 0.4,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  input: {
    height: 78 * Dimension.eh,
    backgroundColor: colors.white,
    padding: 16 * Dimension.ew,
    borderRadius: 5,
    borderColor: colors.gray,
    borderWidth: 1,
  },
});
