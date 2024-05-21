import { Alert } from 'react-native'
import axios from 'axios'
import { API } from '../api';
import { ShowToast } from '../elements/notification';

export const getNotification = () => {
    return axios.get(API.notification.list).then(response => {
        if (response) {
            return response.data;
        }
    }).catch(err => {
        return err;
    })
}
