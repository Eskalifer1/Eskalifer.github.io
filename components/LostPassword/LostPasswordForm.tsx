import { Button, ConfigProvider, Divider, Form, Input } from "antd";
import React from "react";
import { useFormik } from "formik";
import LostPassword from "assets/validatioonScheme/LostPassword";

const LostPasswordForm = () => {
  type FormProps = {
    userName: string;
  };

  const submitHandler = (values: FormProps) => {
    console.log(values);
    form.resetFields();
    formik.resetForm();
  };
  const [form] = Form.useForm();
  const formik = useFormik({
    initialValues: {
      userName: "",
    },
    onSubmit: submitHandler,
    validationSchema: LostPassword,
  });
  return (
    <div className="m-4 basis-1/2 md:basis-full">
      <h1 className="text-[40px] font-[Chivo] md:text-center sm:text-xl">
        Login
      </h1>
      <Divider style={{ backgroundColor: "black" }} />
      <p className="font-[Chivo] mb-4 sm:text-sm">
        Lost your password? Please enter your username or email address. You
        will receive a link to create a new password via email.
      </p>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#000",
            fontFamily: "Chivo",
            colorLinkHover: "#000",
          },
        }}
      >
        <Form
          form={form}
          initialValues={formik.initialValues}
          onFinish={formik.handleSubmit}
          layout="vertical"
        >
          <Form.Item
            name="userName"
            label={"Username or Email Address"}
            help={
              formik.touched.userName && formik.errors.userName ? (
                <div>{formik.errors.userName}</div>
              ) : null
            }
            validateStatus={
              formik.touched.userName && formik.errors.userName
                ? "error"
                : "success"
            }
          >
            <Input
              placeholder="Username or Email Address"
              onChange={(value) => {
                formik.setFieldValue("userName", value.target.value);
              }}
              value={formik.values.userName}
              onBlur={formik.handleBlur}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="py-4 px-[30px] leading-4 h-auto font-[Chivo] shadow-none bg-black minmd:hover:!text-[#FECE30] minmd:hover:bg-black"
            >
              Reset Password
            </Button>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </div>
  );
};

export default LostPasswordForm;