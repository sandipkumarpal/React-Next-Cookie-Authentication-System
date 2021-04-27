import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { Typography } from 'antd';
import withPageTitle from '../../../hoc/withPageTitle'
import RegisterForm from '../../Register/Form'
import withToastHandler from '../../../hoc/withToastHandler';
import { getRegisterService } from '../../../config/api';
import { useRouter } from 'next/router';
import { useUser } from '../../../context/userContext';

const { Text } = Typography;

function RegisterPage(props) {
    const { setErrorHandler, setSuccessHandler } = props;
    const [loader, setLoader] = useState(false)
    const { user } = useUser()
    const router = useRouter()

    const onHandleSubmit = async (values) => {
        setLoader(true)
        try {
            const data = await axios.post(getRegisterService(), {...values})
            console.log('RESPONSE REGISTER: Received values of form: ', data);
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
            <RegisterForm handleFormSubmit={onHandleSubmit} loader={loader}/>
            <p style={{textAlign: 'center'}}>
                <Text type="secondary" style={{textAlign: 'center'}}>Already registered? <Link href="/login"><a>Login</a></Link></Text>
            </p>
        </div>
    )
}

const defaultsProps = {
    pageTitle: 'Register'
}

export default withToastHandler(withPageTitle(RegisterPage, defaultsProps))