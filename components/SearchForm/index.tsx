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
  searchInput: string;
};

const SearchForm: React.FC<PropsType> = ({ setArticlesArray }) => {
  const { t } = useTranslation("global");
  const onSubmitFunction = (values: FormProps) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      searchInput: "",
    },
    validationSchema: SearchPostScheme,
    onSubmit: onSubmitFunction,
  });
  const [form] = Form.useForm();

  useEffect(() => {
    try {
      if (formik.values.searchInput.length >= 3) {
        setArticlesArray(filterArticles(formik.values.searchInput, articles));
      } else {
        setArticlesArray(articles);
      }
    } catch (e) {
      console.error(e);
    }
  }, [formik.values.searchInput]);

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
          layout="inline"
          autoComplete="off"
          className="w-1/2 flex items-center justify-center md:w-full "
        >
          <Form.Item
            name="searchInput"
            className="w-full"
            help={
              formik.touched.searchInput && formik.errors.searchInput ? (
                <div>{t(formik.errors.searchInput)}</div>
              ) : null
            }
            validateStatus={
              formik.touched.searchInput && formik.errors.searchInput
                ? "error"
                : "success"
            }
          >
            <Input
              placeholder={t("global:SearchForm:placeholder") || "Search..."}
              onChange={(e) => {
                formik.setFieldValue("searchInput", e.currentTarget.value);
              }}
              value={formik.values.searchInput}
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
