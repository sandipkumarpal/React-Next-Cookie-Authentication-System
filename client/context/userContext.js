import { createContext, useContext, useReducer, useEffect } from 'react';
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
        router.push('/')
        return setUserLogin(dispatch, data)
    };
    const getUserLogout = () => setUserLogout(dispatch);

    const checkedSessionStorage = () => {
        const data = getUserFromSessionStorage()
        return getUserLogin(data)
    }

    useEffect(() => {
        checkedSessionStorage()
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