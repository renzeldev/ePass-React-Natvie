import * as AuthType from '../types/authType'

export const SignIn = (data) => {
    return {
        type: AuthType.SIGNIN,
        payload: data
    }
}

export const LogOut = () => {
    return {
        type: AuthType.SIGNIN,
        payload: {}
    }
}
