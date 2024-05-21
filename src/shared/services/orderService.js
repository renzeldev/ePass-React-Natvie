import { Alert } from 'react-native'
import axios from 'axios'
import { API } from '../api';
import { ShowToast } from '../elements/notification';

export const getOrders = () => {
    return axios.get(API.order.list).then(response => {
        if (response) {
            return response.data;
        }
    }).catch(err => {
        return err;
    })
}

export const addOrder = (orderData) => {
    return axios.post(API.order.add, orderData).then(response => {
        if (response) {
            return response.data;
        }
    }).catch(err => {
        return err;
    })
}