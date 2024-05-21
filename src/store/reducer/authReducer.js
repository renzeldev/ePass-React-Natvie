import * as AuthType from '../types/authType';
import { Alert } from 'react-native';

const initialState = {
    token: "",
    payload: {}
}

export default authReducer = (state = initialState, action) => {
    switch(action.type) {
        case AuthType.SIGNIN:
            return {
                ...state,
                token: action.payload.token,
                payload: action.payload.payload,
            }
        default:
            return state
    }
}