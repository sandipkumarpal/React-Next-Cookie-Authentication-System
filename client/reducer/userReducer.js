import { setUserInSessionStorage, removeUserFromSessionStorage } from "../helpers/user";

export const initialState = {}

export const userActionType = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT'
}

export const userReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case userActionType.LOGIN:
            return {...state, user: payload}
        case userActionType.LOGOUT:
            return {...state, user: payload}
        default:
            return state;
    }
}

export const setUserLogin = (dispatch, data) => {
    setUserInSessionStorage(data)
    return dispatch({ type: userActionType.LOGIN, payload: data })
}

export const setUserLogout = async (dispatch, data) => {
    removeUserFromSessionStorage()
    return await dispatch({ type: userActionType.LOGOUT, payload: data })
}