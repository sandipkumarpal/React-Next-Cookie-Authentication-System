export const setUserInSessionStorage = (data) => {
    return window.sessionStorage.setItem('user', JSON.stringify(data))
}

export const getUserFromSessionStorage = () => {
    return JSON.parse(window.sessionStorage.getItem('user'));
}

export const removeUserFromSessionStorage = () => {
    return window.sessionStorage.removeItem('user');
}
