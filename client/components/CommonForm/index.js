import React from 'react';
import { Form, Button } from 'antd';
import CommonFormField from './Field';

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

function CommonForm(props) {
  const {
      loader,
      handleFormSubmit,
      formName,
      formFields,
      initialValues={},
      children,
      hasButton,
      buttonProps={},
      ...restProps
    } = props;
  
    const [form] = Form.useForm();

    const renderItems = (formFields) => {
      return formFields.map(field => <CommonFormField {...field} key={field.name} />)
    }
  
    return (
        <Form
          form={form}
          name={formName}
          onFinish={handleFormSubmit}
          initialValues={initialValues}
          {...formItemLayout}
          {...restProps}
        >
          {renderItems(formFields)}
          {hasButton && (
              <Form.Item {...tailFormItemLayout}>
                  <Button
                      type="primary"
                      htmlType="submit"
                      block
                      size="large"
                      loading={loader}
                      {...buttonProps}
                  >
                      {buttonProps.label}
                  </Button>
              </Form.Item>
          )}
        </Form>
    )
}

export default CommonForm
