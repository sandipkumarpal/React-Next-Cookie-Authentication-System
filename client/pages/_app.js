import 'antd/dist/antd.css'
import AppWrapper from '../containers/Wrapper'
import { UserProvider } from '../context/userContext'

function MyApp({Component, pageProps}) {
    return (
        <UserProvider>
            <AppWrapper>
                <Component {...pageProps} />
            </AppWrapper>
        </UserProvider>
    )
}

export default MyApp
