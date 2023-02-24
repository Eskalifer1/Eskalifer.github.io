import { Form, Input } from "antd";
import SearchPostScheme from "assets/validatioonScheme/SearchPostScheme";
import { useFormik } from "formik";
import React from "react";

const NavigationSearch = () => {
  type FormProps = {
    search: string;
  };

  const submitHandler = (values: FormProps) => {
    console.log(values);
    form.resetFields();
    formik.resetForm();
  };
  const [form] = Form.useForm();
  const formik = useFormik({
    initialValues: {
      search: "",
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
        name="search"
        help={
          formik.touched.search && formik.errors.search ? (
            <div>{formik.errors.search}</div>
          ) : null
        }
        validateStatus={
          formik.touched.search && formik.errors.search ? "error" : "success"
        }
        className={"mb-0"}
      >
        <Input
          placeholder="Search..."
          onChange={(value) => {
            formik.setFieldValue("search", value.target.value);
          }}
          value={formik.values.search}
          onBlur={formik.handleBlur}
        />
      </Form.Item>
    </Form>
  );
};

export default NavigationSearch;
