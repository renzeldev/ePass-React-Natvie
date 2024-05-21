import { Alert } from 'react-native'
import axios from 'axios'
import { API } from '../api';
import { ShowToast } from '../elements/notification';

export const getCards = () => {
    return axios.get(API.card.list).then(response => {
        if (response) {
            return response.data;
        }
    }).catch(err => {
        return err;
    })
}

export const getFuelCards = () => {
    return axios.get(API.card.fuel).then(response => {
        if(response) {
            return response.data
        }
    }).catch(err => {
        return err;
    })
}

export const getTollCards = () => {
    return axios.get(API.card.toll).then(response => {
        if(response) {
            return response.data
        }
    }).catch(err => {
        return err;
    })
}