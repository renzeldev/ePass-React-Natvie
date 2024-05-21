import { Alert } from 'react-native'
import axios from 'axios'
import { API } from '../api';
import { ShowToast } from '../elements/notification';

export const addOrder = (orderData) => {
    return axios.get(API.order.add, orderData).then(response => {
        if (response) {
            return response.data;
        }
    }).catch(err => {
        return err;
    })
}