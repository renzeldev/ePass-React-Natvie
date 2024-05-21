import axios from 'axios'
import { API } from '../api';
import { Alert } from 'react-native'
export const getProviders = () => {
    return axios.get(API.fuelProvider.list).then(response => {
        if (response) {
            return response.data;
        }
    }).catch(err => {
        return err;
    })
}

export const getProvinceStations = () => {
    return axios.get(API.fuelProviderStation.list).then(response => {
        // var string = "";
        // Object.keys(response.data).forEach(key => string += key)
        // Alert.alert("wef", string);
        if (response) {

            return response.data;
        }
    }).catch(err => {
        return err;
    })
}

// export const getProvinces = () => {
//     return axios.get(API.fuelProviderStation.list).then(response => {
//         if(response) {
//             return response.data
//         }
//     }).catch(err => {
//         return err;
//     })
// }

