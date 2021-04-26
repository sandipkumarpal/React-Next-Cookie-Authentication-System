import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { Typography } from 'antd';
import withPageTitle from '../../../hoc/withPageTitle'
import RegisterForm from '../../Register/Form'
import withToastHandler from '../../../hoc/withToastHandler';
import { getRegisterService } from '../../../config/api';

const { Text } = Typography;

function RegisterPage(props) {
    const { setErrorHandler, setSuccessHandler } = props;
    const [loader, setLoader] = useState(false)

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