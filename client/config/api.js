const host = process.env.NEXT_PUBLIC_API

export const apiConfig = {
    host:  '/api' // `${host}/api`
}

export const REGISTER_END_POINT = '/register'
export const LOGIN_END_POINT = '/login'
export const LOGOUT_END_POINT = '/logout'


export const getRegisterService = () => {
    return `${apiConfig.host}${REGISTER_END_POINT}`
}

export const getLoginService = () => {
    return `${apiConfig.host}${LOGIN_END_POINT}`
}

export const getLogoutService = () => {
    return `${apiConfig.host}${LOGOUT_END_POINT}`
}