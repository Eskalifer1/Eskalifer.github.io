import React from 'react';
import classes from '@/styles/StartForm.module.css'

import { Button, ConfigProvider, Divider, Form, Input } from 'antd';
import { useFormik } from 'formik';
import RegisterFormScheme from 'assets/validatioonScheme/RegisterFormScheme';

const RegistrationForm = () => {
    type FormProps = {
        userName: string
        email: string
        password: string
    }

    const submitHandler = (values: FormProps) => {
        console.log(values)
        form.resetFields()
        formik.resetForm()
    }
    const [form] = Form.useForm()
    const formik = useFormik({
        initialValues: {
            userName: '',
            email: '',
            password: '',
        },
        onSubmit: submitHandler,
        validationSchema: RegisterFormScheme
    })
    return (
        <div className={classes.formRight}>
            <h1 className={classes.title}>Register</h1>
            <Divider style={{ backgroundColor: 'black' }} />
            <ConfigProvider theme={{
                token: {
                    colorPrimary: '#000',
                    fontFamily: 'Chivo',
                    colorLinkHover: '#000',
                    colorTextBase: '#7A7A7A',
                    fontWeightStrong: 700
                }
            }}>
                <Form
                    form={form}
                    className={classes.form}
                    initialValues={formik.initialValues}
                    onFinish={formik.handleSubmit}
                    layout='vertical'
                >
                    <Form.Item
                        name="userName"
                        label={'Username'}
                        help={formik.touched.userName && formik.errors.userName ? <div className={classes.error}>{formik.errors.userName}</div> : null}
                        validateStatus={formik.touched.userName && formik.errors.userName ? 'error' : 'success'}
                    >
                        <Input placeholder="Username"
                            onChange={(value) => {
                                formik.setFieldValue("userName", value.target.value)
                            }}
                            value={formik.values.userName} onBlur={formik.handleBlur}
                            className={classes.input} />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label={'Email'}
                        help={formik.touched.email && formik.errors.email ? <div className={classes.error}>{formik.errors.email}</div> : null}
                        validateStatus={formik.touched.email && formik.errors.email ? 'error' : 'success'}
                        rules={[{ required: true }]}
                    >
                        <Input placeholder="Email"
                            onChange={(value) => {
                                formik.setFieldValue("email", value.target.value)
                            }}
                            value={formik.values.userName} onBlur={formik.handleBlur}
                            className={classes.input} />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label={'Password'}
                        help={formik.touched.password && formik.errors.password ? <div className={classes.error}>{formik.errors.password}</div> : null}
                        validateStatus={formik.touched.password && formik.errors.password ? 'error' : 'success'}
                        rules={[{ required: true }]}
                    >
                        <Input
                            type="password"
                            placeholder="Password"
                            autoComplete='on'
                            onChange={(value) => {
                                formik.setFieldValue("password", value.target.value)
                            }}
                            value={formik.values.password} onBlur={formik.handleBlur}
                            className={classes.input}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className={classes.registerButton}>
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </ConfigProvider>
        </div>
    );
};

export default RegistrationForm;