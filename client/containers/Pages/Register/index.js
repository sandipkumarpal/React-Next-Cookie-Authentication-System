import React from 'react'
import withPageTitle from '../../../hoc/withPageTitle'

function RegisterPage() {
    return (
        <div>
            RegisterPage
        </div>
    )
}

const defaultsProps = {
    pageTitle: 'Register'
}

export default withPageTitle(RegisterPage, defaultsProps)