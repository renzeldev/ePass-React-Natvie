import { Alert } from 'react-native'
import axios from 'axios'
import { API } from '../api';
import { ShowToast } from '../elements/notification';
import setAuthToken from './utils/setAuthToken';
import SessionStorage from 'react-native-session-storage';

// const authDispatch = useDispatch()

export const Login = (loginData) => {
    return new Promise((resolve, reject) => {
        axios.post(API.auth.login, loginData).then(response => {
            if (response) {
                SessionStorage.setItem("@authSession", response.data.token);
                setAuthToken(response.data.token);
                resolve(response.data);
            }
        }).catch(err => {
            reject(err);
        })
    })
}

export const Register = (registerData) => {
    return new Promise((resolve, reject) => {
        axios.post(API.auth.register, registerData).then(response => {
            if (response) {
                resolve(response)
            }
        }).catch(err => {
            reject(err);
        })
    })
}

export const Logout = (navigation) => {
    SessionStorage.clear();
    setAuthToken(null);
    navigation.navigate('login');
}

export const RecoverPassword = (recoverData) => {
    return new Promise((resolve, reject) => {
        axios.post(API.auth.find, { username: recoverData }).then(response => {
            if (response) {
                resolve(response.data.message)
            }
        }).catch(err => {
            reject(err)
        })
    })
}

export const VerifyPassword = (pin) => {
    return new Promise((resolve, reject) => {
        axios.put(API.auth.verify, { pin: pin }).then(response => {
            if (response) {
                resolve(response)
            }
        }).catch(err => {
            reject(err)
        })
    })
}


export const resetPassword = (resetData) => {
    return new Promise((resolve, reject) => {
        axios.put(API.auth.reset, resetData).then(response => {
            if (response) {
                resolve(response)
            }
        }).catch(err => {
            reject(err)
        })
    })
}

export const updateProfile = ( updatedProfile ) => {
    return new Promise((resolve, reject) => {
        axios.put(API.auth.edit, updatedProfile).then(res => {
            if(res) {
                resolve(res.data)
            }
        }).catch(err => {
            reject(err);
        })
    })
}
