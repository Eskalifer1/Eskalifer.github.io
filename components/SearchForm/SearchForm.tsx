import { Divider, Form, Input } from 'antd';
import SearchPostScheme from 'assets/validatioonScheme/SearchPostScheme';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import classes from '@/styles/SearchForm.module.css'
import { SearchOutlined } from '@ant-design/icons';
import { articles } from '@/pages';
import { ArticleType } from 'types/ArticleType';
import { filterArticles } from 'helpers/filterArticles';

type PropsType = {
    setMasOfArticles: (mas: ArticleType[]) => void
    masofArticles: ArticleType[] | undefined
}

const SearchForm: React.FC<PropsType> = ({ setMasOfArticles, masofArticles }) => {
    type FormProps = {
        search: string
    }
    const onSubmitFunction = (values: FormProps) => {
        console.log(values)
    }

    const formik = useFormik({
        initialValues: {
            search: ''
        },
        validationSchema: SearchPostScheme,
        onSubmit: onSubmitFunction
    })
    const [form] = Form.useForm()

    useEffect(() => {
        try {
            if (formik.values.search.length >= 3) {
                setMasOfArticles(filterArticles(formik.values.search, articles))
            } else {
                setMasOfArticles(articles)
            }
        } catch (e) {
            console.error(e)
        }
    }, [formik.values.search])

    // useEffect(() => {
    //     setMasOfArticles(mas)
    // }, [])

    return (
        <div className={`wrap`}>
            <div className={`${classes.search}`}>
                <h2 className={classes.title}>Articles</h2>
                <Form
                    form={form}
                    initialValues={formik.initialValues}
                    onFinish={formik.handleSubmit}
                    autoComplete="off"
                    className={classes.form}
                >
                    <Form.Item name="search" style={{ width: '100%' }}
                        help={formik.touched.search && formik.errors.search ? <div className={classes.error}>{formik.errors.search}</div> : null}
                        validateStatus={formik.touched.search && formik.errors.search ? 'error' : 'success'}>
                        <Input placeholder="Search..."
                            onChange={(e) => {
                                formik.setFieldValue("search", e.currentTarget.value)
                            }}
                            value={formik.values.search} onBlur={formik.handleBlur}
                            className={classes.input}
                            prefix={<SearchOutlined style={{ color: '#7A7A7A' }} />}
                            size="large" />
                    </Form.Item>
                </Form>
            </div>
            <Divider className={`${classes.divider}`} />
        </div>
    )
};

export default SearchForm;