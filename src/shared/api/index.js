import { baseURL } from "../config"

export const API = {
    auth: {
        login: baseURL + "api/v1.0/auth/login",
        register: baseURL + "api/v1.0/auth/register",
        find: baseURL + "api/v1.0/auth/reset",
        reset: baseURL + "api/v1.0/auth/reset",
        verify: baseURL + "api/v1.0/auth/register",
        postToken: baseURL + "api/v1.0/auth/devices",
        edit: baseURL + "api/v1.0/profile"
    },
    card: {
        add: baseURL + "api/v1.0/cards/assign",
        delete: baseURL + "api/v1.0/cards/{id}",
        block: baseURL + "api/v1.0/cards/{id}",
        list: baseURL + "api/v1.0/cards",
        fuel: baseURL + "api/v1.0/cards?type=fuel",
        toll: baseURL + "api/v1.0/cards?type=toll",
        recharge: baseURL + "api/v1.0/recharge",
    },
    cellulant: {
        pay: baseURL + "api/v1.0/cellulant",
    },
    feed: {
        list: baseURL + "api/v1.0/feeds",
    },
    fuelPrice: {
        list: baseURL + "api/v1.0/prices/fuel",
    },
    fuelProvider: {
        list: baseURL + "api/v1.0/providers"
    },
    fuelProviderStation: {
        list: baseURL + "api/v1.0/stations/fuel"
    },
    momo: {
        pay: baseURL + "api/v1.0/payments/momo"
    },
    notification: {
        edit: baseURL + "api/v1.0/notifications/{id}",
        list: baseURL + "api/v1.0/notifications",
    },
    offer: {
        list: baseURL + "api/v1.0/offers"
    },
    order: {
        add: baseURL + "api/v1.0/orders",
        list: baseURL + "api/v1.0/orders",
    },
    price: {
        list: baseURL + "api/v1.0/prices",
    },
    profile: {
        get: baseURL + "api/v1.0/profile",
        edit: baseURL + "api/v1.0/profile",
        password: baseURL + "api/v1.0/password",
        delete: baseURL + "api/v1.0/profile",
    },
    transaction: {
        list: baseURL + "api/v1.0/transactions",
    },
    vehicle: {
        add: baseURL + "api/v1.0/vehicles",
        edit: baseURL + "api/v1.0/vehicles/{id}",
        list: baseURL + "api/v1.0/vehicles",
        delete: baseURL + "api/v1.0/vehicles/{id}",
    }
}