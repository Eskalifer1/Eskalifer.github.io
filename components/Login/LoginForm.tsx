import React from "react";
import { Button, Checkbox, ConfigProvider, Form, Input } from "antd";
import { useFormik } from "formik";
import loginFormSchema from "assets/validatioonScheme/LoginFormSchema";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const LoginForm = () => {
  type FormProps = {
    userName: string;
    password: string;
    rememberMe: boolean;
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
      password: "",
      rememberMe: false,
    },
    onSubmit: submitHandler,
    validationSchema: loginFormSchema,
  });
  return (
    <div className="m-4 basis-1/2 md:basis-full">
      <h1 className="text-[40px] font-[Chivo] md:text-center sm:text-xl">
        {t("global:LoginForm:title")}
      </h1>
      <hr className="my-6 border-black"/>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#000",
            fontFamily: "Chivo",
            colorLinkHover: "#000",
            colorTextBase: "#7A7A7A",
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
            label={t("global:LoginForm:userName")}
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
              placeholder={t("global:LoginForm:userName") || "Username"}
              onChange={(value) => {
                formik.setFieldValue("userName", value.target.value);
              }}
              value={formik.values.userName}
              onBlur={formik.handleBlur}
            />
          </Form.Item>
          <Form.Item
            name="password"
            label={t("global:LoginForm:password")}
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
          >
            <Input
              type="password"
              placeholder={t("global:LoginForm:password") || "Password"}
              autoComplete="on"
              onChange={(value) => {
                formik.setFieldValue("password", value.target.value);
              }}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
          </Form.Item>
          <Form.Item>
            <Form.Item
              name="rememberMe"
              valuePropName="checked"
              style={{ marginBottom: 15 }}
            >
              <Checkbox
                onChange={(e) =>
                  formik.setFieldValue("rememberMe", e.target.checked)
                }
              >
                {t("global:LoginForm:rememberMe")}
              </Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="py-4 px-[30px] leading-4 h-auto font-[Chivo] shadow-none bg-black minmd:hover:!text-[#FECE30] minmd:hover:bg-black"
            >
              {t("global:LoginForm:formButton")}
            </Button>
          </Form.Item>
          <Form.Item>
            <Link href={"/lostpassword"}>{t("global:LoginForm:lostPassword")} | </Link>
            <Link href={"/registration"}>{t("global:LoginForm:register")}</Link>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </div>
  );
};

export default LoginForm;
