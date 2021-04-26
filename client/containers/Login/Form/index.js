import React from 'react';
import CommonForm from '../../../components/CommonForm';

const FORM_FIELDS = [
    {
        name: "email",
        label: "E-mail",
        rules: [
            {
                type: 'email',
                message: 'The input is not valid E-mail!',
            },
            {
                required: true,
                message: 'Please input your E-mail!',
            }
        ]
    },
    {
        name: "password",
        label: "Password",
        rules: [
            {
                required: true,
                message: 'Please input your password!',
            }
        ],
        type: 'Password'
    }
]

function LoginForm(props) {
    const { loader, handleFormSubmit } = props;
    return (
        <CommonForm
            name="login"
            onFinish={handleFormSubmit}
            formFields={FORM_FIELDS}
            loader={loader}
            scrollToFirstError
            hasButton
            buttonProps={{ label: 'Login' }}
        />
    )
}

export default LoginForm
