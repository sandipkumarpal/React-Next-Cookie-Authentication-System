import React from 'react'
import Jombotron from '../../../components/Jombotron'
import withPageTitle from '../../../hoc/withPageTitle'

function LoginPage(props) {
    return (
        <div>
            Login
        </div>
    )
}

const defaultsProps = {
    pageTitle: 'Login'
}

export default withPageTitle(LoginPage, defaultsProps)
