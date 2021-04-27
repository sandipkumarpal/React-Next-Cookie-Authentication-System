import { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'
import { getUserFromSessionStorage } from '../helpers/user';
import { userReducer, initialState, setUserLogin, setUserLogout } from '../reducer/userReducer';

const UserContext = createContext();
const Consumer = UserContext.Consumer;
const Provider = UserContext.Provider;

const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState)
    const router = useRouter()
    const getUserLogin = (data) => {
        if (!data) {
            return
        }
        return setUserLogin(dispatch, data)
    };
    const getUserLogout = async () => {
        await router.push('/login').then(() => {
            window.location.reload()
        })
        return await setUserLogout(dispatch, {})
    };

    const checkedSessionStorage = () => {
        const data = getUserFromSessionStorage()
        return getUserLogin(data)
    }

    useEffect(() => {
        checkedSessionStorage()
    }, [])

    axios.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error

        let res = error.response
        if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
            return new Promise((resolve, reject) => {
                axios.get('/api/logout')
                    .then((data) => {
                        console.log("/401 error > logout")
                        return getUserLogout();
                    })
                    .catch(err => {
                        console.log("AXIOS INTERCEPTORS ERR", err);
                        return reject(err)
                    })
            })
        }
        return Promise.reject(error);
    });

    useEffect(() => {
        const getCsrfToken = async () => {
            const { data } = await axios.get('/api/csrf-token');
            axios.defaults.headers["X-CSRF-Token"] = data.getCsrfToken
        }
        getCsrfToken();
    }, [])

    return (
        <Provider value={{user: state, getUserLogin, getUserLogout}}>{ children }</Provider>
    )
}

const withUser = (Component) => {
    const WithUser = (props) => {
        return (
            <Consumer>
                {({user, getUserLogin, getUserLogout}) => (
                    <Component {...{...props, user, getUserLogin, getUserLogout}} />
                )}
            </Consumer>
        )
    }

    WithUser.displayName = 'WithUser'
    return WithUser;
}

const useUser = () => {
    const {user, getUserLogin, getUserLogout} = useContext(UserContext)
    return {user, getUserLogin, getUserLogout}
}

export { UserProvider, withUser, useUser}