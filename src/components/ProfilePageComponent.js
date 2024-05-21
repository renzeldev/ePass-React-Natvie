import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import * as Dimension from '../shared/dimension';
import { useToast } from "react-native-toast-notifications";
import { colors } from '../shared/color';
import MainThread from '../shared/components/MainThread';
import { useSelector } from 'react-redux';
import * as authService from '../shared/services/auth'
import * as AuthActions from '../store/actions/authAction'

import { useDispatch } from 'react-redux';

const ProfilePageComponent = () => {
    return (
        <MainThread Component={ChildComponent} />
    )
}

const ChildComponent = () => {

    const { payload } = useSelector(state => state.authReducer);
    const { token } = useSelector(state => state.authReducer);
    const [fname, setFname] = useState(payload.firstName);
    const [lname, setLname] = useState(payload.lastName);
    const [email, setEmail] = useState(payload.email);
    const [phone, setPhone] = useState(payload.phone);
    const [password, setPassword] = useState('');
    const onChangeFname = fname => setFname(fname);
    const onChangeLname = lname => setLname(lname);
    const onChangeEmail = email => setEmail(email);
    const onChangePhone = phone => setPhone(phone);
    const onChangePassword = password => setPassword(password);

    const authDispatch = useDispatch();

    const toast = useToast();

    const saveChange = () => {
        const updatedProfile = {
            firstName: fname,
            lastName: lname,
            email: email,
            phone: phone,
        }
        let flag = true;
        Object.keys(updatedProfile).map(k => {
            if(updatedProfile[k] === "") {
                flag = false;
            }
        })
        if(flag) {
            authService.updateProfile(updatedProfile).then((res) => {
                authDispatch(AuthActions.SignIn({ payload: res, token: token}));
                toast.show('Profile updated successfully', {
                    type: 'success',
                    placement: 'top',
                    duration: 3000,
                    offset: 30,
                    animationType: 'zoom-in',
                })
            })
        } else {
            toast.show('Please fill all the inputs', {
                type: 'warning',
                placement: 'top',
                duration: 3000,
                offset: 30,
                animationType: 'zoom-in',
            })
        }
    }

    return (
        <View style={styles.mainBoard}>
            <View style={styles.container}>
                <Text style={styles.inputLabel}>First Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeFname}
                    value={fname}
                />
                <Text style={styles.inputLabel}>Last Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeLname}
                    value={lname}
                />
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    value={email}
                    keyboardType="email-address"
                />
                <Text style={styles.inputLabel}>Phone Number</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePhone}
                    value={phone}
                    keyboardType="phone-pad"
                />
                <Text style={styles.inputLabel}>Password</Text>
                <View style={styles.password}>
                    <View style={styles.inputPassword}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangePassword}
                            value={password}
                            placeholder="Password"
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.passwordButton}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.changePassword}>CHANGE PASSWORD</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.saveChange}>
                    <TouchableOpacity style={styles.saveButton} onPress={saveChange}>
                        <Text style={styles.saveText}>SAVE CHANGES</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signOut}>
                    <TouchableOpacity>
                        <Text style={styles.signOutText}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ProfilePageComponent;

const styles = StyleSheet.create({
    mainBoard: {
        paddingTop: 94 * Dimension.eh,
        paddingLeft: 46 * Dimension.ew,
        paddingRight: 46 * Dimension.ew
    },
    container: {
        flexDirection: 'column',
        height: 850 * Dimension.eh,
    },
    input: {
        height: 60 * Dimension.eh,
        backgroundColor: 'rgba(153, 153, 153, 0.05)',
        padding: 16 * Dimension.ew,
        borderRadius: 5,
        borderColor: 'rgba(228, 228, 228, 0.60)',
        borderWidth: 1,
    },
    inputLabel: {
        marginVertical: 10 * Dimension.eh,
        fontSize: 16,
        color: colors.blue,
        fontWeight: '500',
        fontFamily: 'SF-Pro-Text-Regular',
    },
    button: {
        height: 60 * Dimension.eh,
        backgroundColor: colors.blue,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    changePassword: {
        color: colors.white,
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'SF-Pro-Text-Regular',
    },
    password: {
        flex: 1.5,
        flexDirection: 'row',
    },
    inputPassword: {
        flex: 1,
        paddingRight: 15 * Dimension.ew,
    },
    passwordButton: {
        flex: 1,
        paddingLeft: 15 * Dimension.ew,
    },
    saveButton: {
        height: 70 * Dimension.eh,
        backgroundColor: colors.green,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    saveChange: {
        flex: 1,
    },
    saveText: {
        color: colors.white,
        fontWeight: "600",
        fontFamily: 'SF-Pro-Text-Regular',
    },
    signOut: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signOutText: {
        color: colors.darkgray,
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'SF-Pro-Text-Regular',
    }
});
