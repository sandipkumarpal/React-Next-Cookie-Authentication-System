import React from 'react'
import withPageTitle from '../../../hoc/withPageTitle'
import RegisterForm from '../../Register/Form'

function RegisterPage() {
    return (
        <div style={{ maxWidth: 500, margin: '0 auto'}}>
            <RegisterForm />
        </div>
    )
}

const defaultsProps = {
    pageTitle: 'Register'
}

export default withPageTitle(RegisterPage, defaultsProps)