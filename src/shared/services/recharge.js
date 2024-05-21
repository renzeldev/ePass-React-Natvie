import { Alert } from 'react-native'
import axios from 'axios'
import { API } from '../api';
import { ShowToast } from '../elements/notification';

export const getRecharge = (rechargeData) => {
    return axios.post(API.momo.pay, rechargeData).then(response => {
        if (response) {
            return response.data;
        }
    }).catch(err => {
        return err;
    })
}

export const getIspRecharge = (rechargeData) => {
    return axios.post(API.cellulant.pay, rechargeData).then(response => {
        if (response) {
            return response.data;
        }
    }).catch(err => {
        return err;
    })
}