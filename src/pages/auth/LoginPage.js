import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,

} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useToast } from "react-native-toast-notifications";
import * as Dimension from '../../shared/dimension';
import { colors } from '../../shared/color';
import Logo from '../../components/Logo';
import * as AuthActions from '../../store/actions/authAction'
import * as authService from '../../shared/services/auth'
import Spin from '../../shared/elements/spin';

const LoginPage = ({ navigation }) => {
  const authDispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onChangeEmail = email => setUsername(email);
  const onChangePassword = password => setPassword(password);

  const [isLoading, setIsLoading] = useState(true);

  const toast = useToast();

  const login = () => {
    if (username && password) {
      // isLoading
      //   ?
      //   <Spin text="" />
      //   :

        authService.Login({ username, password }).then(res => {
          // Alert.alert("wefewf", res.token);
          authDispatch(AuthActions.SignIn(res));
          toast.show("Login successful", {
            type: 'success',
            placement: 'top',
            duration: 3000,
            offset: 30,
            animationType: 'zoom-in',
          });
          navigation.navigate('home');
        }).catch(err => {
          toast.show('Invalid email or password', {
            type: 'warning',
            placement: 'top',
            duration: 3000,
            offset: 30,
            animationType: 'zoom-in',
          })
        });
    }
  }
  const create_account = () => {
    navigation.navigate("signup");
  }
  const forgottenPassword = () => {
    navigation.navigate("forgotpwd1");
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.title}>
        <Logo />
      </View>
      <View style={styles.content}>
        <Text style={styles.inputLabel}>Email or phone number:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={username}
          keyboardType="email-address"
        />
        <Text style={styles.inputLabel}>Password:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          secureTextEntry={true}
        />
        <Text style={styles.forgottenQuestion}>
          Have you forgotten your password?
        </Text>
        <Text style={styles.forgottenPassword} onPress={forgottenPassword}>click here to recover it</Text>
      </View>
      <View style={styles.login}>
        <TouchableOpacity style={styles.loginButton} onPress={login}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.accountButton} onPress={create_account}>
          <Text style={styles.accountText}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flex: 0.4,
    paddingTop: 75 * Dimension.eh,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 0.3,
    flexDirection: 'column',
    paddingTop: 50 * Dimension.eh,
    paddingHorizontal: 25 * Dimension.ew,
  },
  inputLabel: {
    marginVertical: 10 * Dimension.eh,
    fontSize: 16,
    color: colors.white,
    fontWeight: '500',
    fontFamily: 'SF-Pro-Text-Regular',
  },
  forgottenQuestion: {
    marginTop: 10 * Dimension.eh,
    fontSize: 16,
    color: colors.white,
    fontWeight: '500',
    fontFamily: 'SF-Pro-Text-Regular',
  },
  forgottenPassword: {
    color: colors.yellow,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'SF-Pro-Text-Regular',
  },
  input: {
    height: 78 * Dimension.eh,
    backgroundColor: colors.white,
    padding: 16 * Dimension.ew,
    borderRadius: 5,
    borderColor: colors.gray,
    borderWidth: 1,
  },
  login: {
    flex: 0.3,
    paddingHorizontal: 25 * Dimension.ew,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: 40 * Dimension.eh,
  },
  loginButton: {
    height: 80 * Dimension.eh,
    backgroundColor: colors.yellow,
    borderRadius: 11 * Dimension.eh,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30 * Dimension.eh,
  },
  loginText: {
    color: colors.blue,
    fontWeight: '700',
    fontSize: 16,
    fontFamily: 'SF-Pro-Text-Regular',
  },
  accountButton: {
    height: 80 * Dimension.eh,
    backgroundColor: 'transparent',
    borderColor: colors.yellow,
    borderWidth: 3,
    borderRadius: 11 * Dimension.eh,
    alignItems: 'center',
    justifyContent: 'center',
  },
  accountText: {
    color: colors.yellow,
    fontWeight: '700',
    fontSize: 16,
    fontFamily: 'SF-Pro-Text-Regular',
  },
});
// import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import auth from '@react-native-firebase/auth';

// const LoginPage = () => {

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   // If null, no SMS has been sent
//   const [confirm, setConfirm] = useState(null);

//   // verification code (OTP - One-Time-Passcode)
//   const [code, setCode] = useState('');

//   // Handle login
//   const onAuthStateChanged = (user) => {
//     if (user) {
//       // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
//       // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
//       // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
//       // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
//     }
//   }

//   // Handle the button press
//   const signInWithPhoneNumber = async (phoneNumber) => {
//     const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//     setConfirm(confirmation);
//   }

//   const confirmCode = async () => {
//     try {
//       await confirm.confirm(code);
//     } catch (error) {
//       console.log('Invalid code.');
//     }
//   }

//   if (!confirm) {
//     return (
//       <Button
//         title="Phone Number Sign In"
//         onPress={() => signInWithPhoneNumber('+1 650-555-3434')}
//       />
//     );
//   }

//   return (
//     <>
//       <TextInput value={code} onChangeText={text => setCode(text)} />
//       <Button title="Confirm Code" onPress={confirmCode} />
//     </>
//   )
// }

// export default LoginPage

// const styles = StyleSheet.create({})
