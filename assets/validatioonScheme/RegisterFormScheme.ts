import { i18n } from "next-i18next";
import * as Yup from "yup";

const RegisterFormScheme = Yup.object().shape({
  userName: Yup.string()
    .min(2, i18n?.t("global:FormsValidation:minLength", { length: 2 }) || "")
    .max(40, i18n?.t("global:FormsValidation:maxLength", { length: 40 }) || ""),
  email: Yup.string()
    .min(2, i18n?.t("global:FormsValidation:minLength", { length: 2 }) || "")
    .max(40, i18n?.t("global:FormsValidation:maxLength", { length: 40 }) || "")
    .email(i18n?.t("global:FormsValidation:invalidEmail", { length: 40 }) || "")
    .required(i18n?.t("global:FormsValidation:required") || ""),
  password: Yup.string()
    .min(4, i18n?.t("global:FormsValidation:minLength", { length: 4 }) || "")
    .required(i18n?.t("global:FormsValidation:required") || ""),
});
export default RegisterFormScheme;
