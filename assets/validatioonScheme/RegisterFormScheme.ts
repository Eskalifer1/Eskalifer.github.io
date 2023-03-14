import * as Yup from "yup";

const RegisterFormScheme = Yup.object().shape({
  userName: Yup.string()
    .min(3, "global:FormsValidation:minLength")
    .max(40, "global:FormsValidation:maxLength"),
  email: Yup.string()
    .min(3, "global:FormsValidation:minLength")
    .max(40, "global:FormsValidation:maxLength")
    .email("global:FormsValidation:invalidEmail")
    .required("global:FormsValidation:required"),
  password: Yup.string()
    .min(3, "global:FormsValidation:minLength")
    .required("global:FormsValidation:required"),
});
export default RegisterFormScheme;
