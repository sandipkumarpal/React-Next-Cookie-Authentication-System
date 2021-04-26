import React from 'react'
import { Form, Input } from 'antd';

function CommonFormField(props) {
    const { name, label, tooltip, rules, type="text", inputProps, ...restProps} = props
    return (
        <Form.Item
            name={name}
            label={label}
            tooltip={tooltip}
            rules={rules}
            {...restProps}
        >
            <Input type={type} size="large" {...inputProps} />
        </Form.Item>
    )
}

export default CommonFormField
