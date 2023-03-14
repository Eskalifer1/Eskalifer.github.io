import * as Yup from "yup";
import { i18n } from "next-i18next";

const loginFormSchema = Yup.object().shape({
    userName: Yup.string()
        .min(2, i18n?.t("global:FormsValidation:minLength", {length: 2}) || "")
        .max(40, i18n?.t("global:FormsValidation:maxLength", {length: 40}) || "")
        .required(i18n?.t("global:FormsValidation:required") || ""),
    password: Yup.string()
        .min(3, i18n?.t("global:FormsValidation:minLength", {length: 3}) || "")
        .required(i18n?.t("global:FormsValidation:required") || ""),
});
export default loginFormSchema;