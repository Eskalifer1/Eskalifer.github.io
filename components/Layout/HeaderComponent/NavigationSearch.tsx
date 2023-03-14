import { Form, Input } from "antd";
import SearchPostScheme from "assets/validatioonScheme/SearchPostScheme";
import { useFormik } from "formik";
import React from "react";
import { useTranslation } from "next-i18next";

const NavigationSearch = () => {
  type FormProps = {
    searchInput: string;
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
      searchInput: "",
    },
    onSubmit: submitHandler,
    validationSchema: SearchPostScheme,
  });
  return (
    <Form
      form={form}
      initialValues={formik.initialValues}
      onFinish={formik.handleSubmit}
      layout="vertical"
    >
      <Form.Item
        name="searchInput"
        help={
          formik.touched.searchInput && formik.errors.searchInput ? (
            <div>{t(formik.errors.searchInput)}</div>
          ) : null
        }
        validateStatus={
          formik.touched.searchInput && formik.errors.searchInput ? "error" : "success"
        }
        className={"mb-0"}
      >
        <Input
          placeholder={t("global:header:searchPlaceholder") || ""}
          onChange={(value) => {
            formik.setFieldValue("searchInput", value.target.value);
          }}
          value={formik.values.searchInput}
          onBlur={formik.handleBlur}
        />
      </Form.Item>
    </Form>
  );
};

export default NavigationSearch;
