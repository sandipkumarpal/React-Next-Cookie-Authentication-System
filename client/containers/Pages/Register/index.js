import React from 'react'
import { Typography } from 'antd';
import withPageTitle from '../../../hoc/withPageTitle'
import RegisterForm from '../../Register/Form'
import Link from 'next/link'

const { Text } = Typography;

function RegisterPage() {
    return (
        <div style={{ maxWidth: 500, margin: '0 auto'}}>
            <RegisterForm />
            <p style={{textAlign: 'center'}}>
                <Text type="secondary" style={{textAlign: 'center'}}>Already registered? <Link href="/login"><a>Login</a></Link></Text>
            </p>
        </div>
    )
}

const defaultsProps = {
    pageTitle: 'Register'
}

export default withPageTitle(RegisterPage, defaultsProps)