import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import * as Dimension from '../../shared/dimension';
import { colors } from '../../shared/color';
import * as authService from '../../shared/services/auth';
import { useToast } from "react-native-toast-notifications";
import { useRoute } from '@react-navigation/native';

const ForgotPasswordPage3 = () => {
  const [formData, setFormData] = useState({
    existPassword: '',
    password: '',
    confirmPassword: '',
  });
  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

 

  const route = useRoute();

  const opt = route.params;

  const toast = useToast();

  const changePassword = () => {
    if (formData.password == formData.confirmPassword) {
      authService.resetPassword({ password: formData.password, pin: opt.data }).then(res => {
        toast.show('Password change successful.', {
          type: 'success',
          placement: 'top',
          duration: 3000,
          offset: 30,
          animationType: 'zoom-in',
        });
        navigation.navigate("login");
      }).catch(err => {
        toast.show("Confirm the password", {
          type: 'warning',
          placement: 'top',
          duration: 3000,
          offset: 30,
          animationType: 'zoom-in',
        });
      })
    } else {
      toast.show("Please confirm password", {
        type: 'warning',
        placement: 'top',
        duration: 3000,
        offset: 30,
        animationType: 'zoom-in',
      });
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Verify Account</Text>
        <Text style={styles.subText}>
          Please enter your new password to continue{opt}
        </Text>
      </View>
      <View style={styles.inputPassword}>
        <SafeAreaView>
        <Text
          style={styles.inputLabel}
          value={formData.existPassword}
          onChangeText={value => handleChange('existPassword', value)}>
          Existing Password{opt.data}
        </Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
        />
        <Text
          style={styles.inputLabel}
          value={formData.password}
          onChangeText={value => handleChange('password', value)}>
          New Password
        </Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
        />
        <Text
          style={styles.inputLabel}
          value={formData.confirmPassword}
          onChangeText={value => handleChange('confirmPassword', value)}>
          Repeat password
        </Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
        />
        </SafeAreaView>
      </View>
      <View style={styles.footer}>
        <Button text="Change password" onPress={changePassword} />
      </View>
    </View>
  );
};

export default ForgotPasswordPage3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 160 * Dimension.eh,
  },
  content: {
    flex: 0.2,
    alignItems: 'center',
    marginTop: 30 * Dimension.eh,
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
  inputPassword: {
    flex: 0.2,
    flexDirection: 'column',
    marginHorizontal: 30 * Dimension.ew,
    marginTop: -70 * Dimension.eh,
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
    // flex: 0.4,
    position: 'absolute',
    bottom:0,
    right:0,
    left:0,
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
