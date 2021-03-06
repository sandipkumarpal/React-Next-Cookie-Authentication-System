import React from 'react';
import CommonForm from '../../../components/CommonForm';

const FORM_FIELDS = [
    {
        name: "name",
        label: "Name",
        tooltip: "What do you want others to call you?",
        rules: [
            {
                required: true,
                message: 'Please input your Name!',
                whitespace: true
            }
        ]
    },
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
    },
    {
        name: "phone",
        label: "Phone Number",
        rules: [{ required: true, message: 'Please input your phone number!' }]
    }
]

function RegisterForm(props) {
    const { loader, handleFormSubmit } = props;
    return (
        <CommonForm
            name="register"
            onFinish={handleFormSubmit}
            formFields={FORM_FIELDS}
            loader={loader}
            scrollToFirstError
            hasButton
            buttonProps={{ label: 'Register' }}
        />
    )
}

export default RegisterForm
