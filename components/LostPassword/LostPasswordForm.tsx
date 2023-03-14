import { Button, ConfigProvider, Divider, Form, Input } from "antd";
import React from "react";
import { useFormik } from "formik";
import LostPassword from "assets/validatioonScheme/LostPassword";
import { useTranslation } from "next-i18next";

const LostPasswordForm = () => {
  type FormProps = {
    userName: string;
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
    },
    onSubmit: submitHandler,
    validationSchema: LostPassword,
  });
  return (
    <div className="m-4 basis-1/2 md:basis-full">
      <h1 className="text-[40px] font-[Chivo] md:text-center sm:text-xl">
        {t("global:LostPasswordForm:title")}
      </h1>
      <Divider style={{ backgroundColor: "black" }} />
      <p className="font-[Chivo] mb-4 sm:text-sm">
        {t("global:LostPasswordForm:description")}
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
            label={t("global:LostPasswordForm:userName")}
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
              placeholder={t("global:LostPasswordForm:userName") || "UserName"}
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
              {t("global:LostPasswordForm:formButton")}
            </Button>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </div>
  );
};

export default LostPasswordForm;
