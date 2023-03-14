import React from "react";
import { Button, ConfigProvider, Divider, Form, Input } from "antd";
import { useFormik } from "formik";
import RegisterFormScheme from "assets/validatioonScheme/RegisterFormScheme";
import { useTranslation } from "next-i18next";

const RegistrationForm = () => {
  type FormProps = {
    userName: string;
    email: string;
    password: string;
  };

  const { t } = useTranslation("global");

  const submitHandler = (values: FormProps) => {
    console.log(values);
    form.resetFields();
    formik.resetForm();
  };
  const [form] = Form.useForm();
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    onSubmit: submitHandler,
    validationSchema: RegisterFormScheme,
  });
  return (
    <div className="m-4 basis-1/2 md:basis-full">
      <h1 className="text-[40px] font-[Chivo] md:text-center sm:text-xl">
        {t("global:RegistrationForm:title")}
      </h1>
      <Divider style={{ backgroundColor: "black" }} />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#000",
            fontFamily: "Chivo",
            colorLinkHover: "#000",
            colorTextBase: "#7A7A7A",
            fontWeightStrong: 700,
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
            label={
              <p style={{ fontWeight: 700 }}>
                {t("global:RegistrationForm:userName")}
              </p>
            }
            help={
              formik.touched.userName && formik.errors.userName ? (
                <div>{t(formik.errors.userName)}</div>
              ) : null
            }
            validateStatus={
              formik.touched.userName && formik.errors.userName
                ? "error"
                : "success"
            }
          >
            <Input
              placeholder={t("global:RegistrationForm:userName") || "Username"}
              onChange={(value) => {
                formik.setFieldValue("userName", value.target.value);
              }}
              value={formik.values.userName}
              onBlur={formik.handleBlur}
            />
          </Form.Item>
          <Form.Item
            name="email"
            label={
              <p style={{ fontWeight: 700 }}>
                {t("global:RegistrationForm:email")}
              </p>
            }
            help={
              formik.touched.email && formik.errors.email ? (
                <div>{t(formik.errors.email)}</div>
              ) : null
            }
            validateStatus={
              formik.touched.email && formik.errors.email ? "error" : "success"
            }
            rules={[{ required: true }]}
          >
            <Input
              placeholder={t("global:RegistrationForm:email") || "Email"}
              onChange={(value) => {
                formik.setFieldValue("email", value.target.value);
              }}
              value={formik.values.userName}
              onBlur={formik.handleBlur}
            />
          </Form.Item>
          <Form.Item
            name="password"
            label={
              <p style={{ fontWeight: 700 }}>
                {t("global:RegistrationForm:password")}
              </p>
            }
            help={
              formik.touched.password && formik.errors.password ? (
                <div>{t(formik.errors.password)}</div>
              ) : null
            }
            validateStatus={
              formik.touched.password && formik.errors.password
                ? "error"
                : "success"
            }
            rules={[{ required: true }]}
          >
            <Input
              type="password"
              placeholder={t("global:RegistrationForm:password") || "Password"}
              autoComplete="on"
              onChange={(value) => {
                formik.setFieldValue("password", value.target.value);
              }}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full py-4 px-[30px] leading-4 h-auto font-[Chivo] shadow-none bg-black minmd:hover:!text-[#FECE30] minmd:hover:bg-black"
            >
              {t("global:RegistrationForm:formButton")}
            </Button>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </div>
  );
};

export default RegistrationForm;
