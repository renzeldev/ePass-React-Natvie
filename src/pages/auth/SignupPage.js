import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import React, { useState, useEffect } from 'react';
import * as Dimension from '../../shared/dimension';
import { colors } from '../../shared/color';
import Logo from '../../components/Logo';
import * as authService from '../../shared/services/auth';
import { useToast } from "react-native-toast-notifications";

const SignupPage = ({ navigation }) => {

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAwareScrollView>
        <ChildComponent navigation={navigation} />
      </KeyboardAwareScrollView>
    </View>

  );
};

const ChildComponent = ({ navigation }) => {
  const toast = useToast();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    company: '',
    password: '',
  });

  const handleChange = (name, value) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const login = () => {
    navigation.navigate("login");
  }

  const register = () => {
    authService.Register(formData).then(res => {
      toast.show("Register successful", {
        type: 'success',
        placement: 'top',
        duration: 3000,
        offset: 30,
        animationType: 'zoom-in',
      });
      navigation.navigate("login");
    }).catch(err => {
      toast.show("Register Failed", {
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
      <View style={styles.title}>
        <Logo />
      </View>
      <View style={styles.content}>
        <SafeAreaView style={styles.signupInput}>
          <View style={styles.fullastName}>
            <View style={styles.firstName}>
              <Text style={styles.inputLabel}>First Name:</Text>
              <TextInput
                style={styles.input}
                onChangeText={value => handleChange('firstName', value)}
                value={formData.firstName}
              />
            </View>
            <View style={styles.lastName}>
              <Text style={styles.inputLabel}>Last Name:</Text>
              <TextInput
                style={styles.input}
                onChangeText={value => handleChange('lastName', value)}
                value={formData.lastName}
              />
            </View>
          </View>
          <Text style={styles.inputLabel}>Email or phone number:</Text>
          <TextInput
            style={styles.input}
            onChangeText={value => handleChange('username', value)}
            value={formData.username}
            keyboardType="email-address"
          />
          <Text style={styles.inputLabel}>
            Employer / Company Name (Optional)
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={value => handleChange('company', value)}
            value={formData.company}
          // keyboardType="email-address"
          />
          <Text style={styles.inputLabel}>Password:</Text>
          <TextInput
            style={styles.input}
            onChangeText={value => handleChange('password', value)}
            value={formData.password}
            secureTextEntry={true}
          />
          <Text style={styles.condition}>
            By continuing you agree to Book Now Zambias
          </Text>
          <Text style={styles.term}>Terms & Conditions</Text>
        </SafeAreaView>
      </View>
      <View style={styles.signup}>
        <TouchableOpacity style={styles.accountButton} onPress={login}>
          <Text style={styles.accountText}>ALREADY HAVE ACCOUNT? LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButton} onPress={register}>
          <Text style={styles.signupText}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignupPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    // flex: 0.35,
    marginTop: 280 * Dimension.eh,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    // flex: 0.35,
    marginTop: 100 * Dimension.eh,
    paddingHorizontal: 25 * Dimension.ew,
  },
  signup: {
    // flex: 0.3,
    marginTop: 60 * Dimension.eh,
    justifyContent: 'flex-end',
    paddingBottom: 40 * Dimension.eh,
    paddingHorizontal: 25 * Dimension.ew,

  },
  inputLabel: {
    marginVertical: 10 * Dimension.eh,
    fontSize: 16,
    fontFamily: 'SF-Pro-Text-Regular',
    color: colors.white,
    fontWeight: '500',
  },
  fullastName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  firstName: {
    flex: 0.48,
  },
  lastName: {
    flex: 0.48,
  },
  input: {
    height: 78 * Dimension.eh,
    backgroundColor: colors.white,
    padding: 16 * Dimension.ew,
    borderRadius: 5,
    borderColor: colors.gray,
    borderWidth: 1,
  },
  signupButton: {
    height: 80 * Dimension.eh,
    backgroundColor: colors.yellow,
    borderRadius: 11 * Dimension.eh,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupText: {
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
    marginBottom: 30 * Dimension.eh,
  },
  accountText: {
    color: colors.yellow,
    fontWeight: '700',
    fontSize: 16,
    fontFamily: 'SF-Pro-Text-Regular',
  },
  condition: {
    marginTop: 25 * Dimension.eh,
    fontSize: 16,
    color: colors.white,
    fontWeight: '500',
    fontFamily: 'SF-Pro-Text-Regular',
  },
  term: {
    color: colors.yellow,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'SF-Pro-Text-Regular',
  },
});
