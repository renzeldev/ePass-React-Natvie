import axios from 'axios'
import { API } from '../api';

export const getTollPrices = () => {
    const params = {
        type: 'toll',
    }
    return axios.get(API.price.list, { params }).then(res => {
        if( res ) {
            return res.data
        }
    }).catch(err => {
        return err;
    })
}
