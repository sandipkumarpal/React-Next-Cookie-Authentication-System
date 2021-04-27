import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link';
import { Typography } from 'antd';
import withPageTitle from '../../../hoc/withPageTitle'
import withToastHandler from '../../../hoc/withToastHandler';
import LoginForm from '../../Login/Form'
import { getLoginService } from '../../../config/api';
import { useUser } from '../../../context/userContext';
import { useRouter } from 'next/router';

const { Text } = Typography;

function LoginPage(props) {
    const { setErrorHandler, setSuccessHandler } = props;
    const [loader, setLoader] = useState(false)
    const { user, getUserLogin } = useUser()
    const router = useRouter()

    const onHandleSubmit = async (values) => {
        setLoader(true)
        try {
            const { data } = await axios.post(getLoginService(), {...values})
            console.log('RESPONSE LOGIN: Received values of form: ', data);
            getUserLogin(data)
            setSuccessHandler(data)
          } catch (err) {
            setErrorHandler(err)
          } finally {
            setLoader(false)
         }
    }

    useEffect(() => {
        if (Object.keys(user).length !== 0) { return router.push('/') }
    }, [user])

    return (
        <div style={{ maxWidth: 500, margin: '0 auto'}}>
            <LoginForm handleFormSubmit={onHandleSubmit} loader={loader}/>
            <p style={{textAlign: 'center'}}>
                <Text type="secondary" style={{textAlign: 'center'}}>Not yet registered? <Link href="/register"><a>Register</a></Link></Text>
            </p>
        </div>
    )
}

export default withToastHandler(LoginPage)
