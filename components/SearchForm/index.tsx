import { Form, Input } from "antd";
import SearchPostScheme from "assets/validatioonScheme/SearchPostScheme";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { ArticleType } from "types/ArticleType";
import { articles, filterArticles } from "helpers/filterArticles";
import { useTranslation } from "next-i18next";

type PropsType = {
  setArticlesArray: (mas: ArticleType[]) => void;
};
type FormProps = {
  search: string;
};

const SearchForm: React.FC<PropsType> = ({ setArticlesArray }) => {
  const { t } = useTranslation("global");
  const onSubmitFunction = (values: FormProps) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema: SearchPostScheme,
    onSubmit: onSubmitFunction,
  });
  const [form] = Form.useForm();

  useEffect(() => {
    try {
      if (formik.values.search.length >= 3) {
        setArticlesArray(filterArticles(formik.values.search, articles));
      } else {
        setArticlesArray(articles);
      }
    } catch (e) {
      console.error(e);
    }
  }, [formik.values.search]);

  return (
    <div className="wrap">
      <div className="w-full flex items-center justify-between md:block">
        <h2 className="w-1/2 p-4 text-[40px] font-normal font-[Chivo] sm:text-xl ">
          {t("global:SearchForm:title")}
        </h2>
        <Form
          form={form}
          initialValues={formik.initialValues}
          onFinish={formik.handleSubmit}
          autoComplete="off"
          className="w-1/2 flex items-center justify-center md:w-full "
        >
          <Form.Item
            name="search"
            className="w-full"
            help={
              formik.touched.search && formik.errors.search ? (
                <div>{formik.errors.search}</div>
              ) : null
            }
            validateStatus={
              formik.touched.search && formik.errors.search
                ? "error"
                : "success"
            }
          >
            <Input
              placeholder={t("global:SearchForm:placeholder") || "Search..."}
              onChange={(e) => {
                formik.setFieldValue("search", e.currentTarget.value);
              }}
              value={formik.values.search}
              onBlur={formik.handleBlur}
              className="min-h-[15px] w-full"
              prefix={<SearchOutlined className={"text-[#7A7A7A]"} />}
              size="large"
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SearchForm;
