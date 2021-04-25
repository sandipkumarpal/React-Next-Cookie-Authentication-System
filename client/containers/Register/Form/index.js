import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
} from 'antd';

import axios from 'axios'

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

const URL = 'http://localhost:8000/api/register'

function RegisterForm() {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
      const data = await axios.post(URL, {...values})
      console.log('RESPONSE REGISTER: Received values of form: ', data);
    };
    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{}}
            scrollToFirstError
            >
            <Form.Item
                name="name"
                label="Name"
                tooltip="What do you want others to call you?"
                rules={[{ required: true, message: 'Please input your Name!', whitespace: true }]}
            >
                <Input size="large" />
            </Form.Item>

            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                },
                {
                    required: true,
                    message: 'Please input your E-mail!',
                },
                ]}
            >
                <Input size="large" />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
                // hasFeedback
            >
                <Input.Password size="large" />
            </Form.Item>

            <Form.Item
                name="phone"
                label="Phone Number"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
                <Input size="large"/>
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" block size="large">Register</Button>
            </Form.Item>
            </Form>
    )
}

export default RegisterForm
