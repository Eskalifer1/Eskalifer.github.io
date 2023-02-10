import { Button, ConfigProvider, Divider, Form, Input } from 'antd'
import classes from '@/styles/StartForm.module.css'
import React from 'react'
import { useFormik } from 'formik'
import LostPassword from 'assets/validatioonScheme/LostPassword'

const FormComponent = () => {
    type FormProps = {
        userName: string
    }

    const submitHandler = (values: FormProps) => {
        console.log(values)
        form.resetFields()
        formik.resetForm()
    }
    const [form] = Form.useForm()
    const formik = useFormik({
        initialValues: {
            userName: ''
        },
        onSubmit: submitHandler,
        validationSchema: LostPassword
    })
    return (
        <div className={classes.formRight}>
            <h1 className={classes.title}>Login</h1>
            <Divider style={{ backgroundColor: 'black' }} />
            <p className={classes.lostDescription}>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
            <ConfigProvider theme={{
                token: {
                    colorPrimary: '#000',
                    fontFamily: 'Chivo',
                    colorLinkHover: '#000'
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
                        label={'Username or Email Address'}
                        help={formik.touched.userName && formik.errors.userName ? <div className={classes.error}>{formik.errors.userName}</div> : null}
                        validateStatus={formik.touched.userName && formik.errors.userName ? 'error' : 'success'}
                    >
                        <Input placeholder="Username or Email Address"
                            onChange={(value) => {
                                formik.setFieldValue("userName", value.target.value)
                            }}
                            value={formik.values.userName} onBlur={formik.handleBlur}
                            className={classes.input} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className={classes.loginButton}>
                            Reset Password
                        </Button>
                    </Form.Item>
                </Form>
            </ConfigProvider>
        </div>
    );
};

export default FormComponent;