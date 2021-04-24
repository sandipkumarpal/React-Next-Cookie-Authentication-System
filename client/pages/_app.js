import 'antd/dist/antd.css'
import AppWrapper from '../containers/Wrapper'

function MyApp({Component, pageProps}) {
    return (
        <AppWrapper>
            <Component {...pageProps} />
        </AppWrapper>
    )
}

export default MyApp
