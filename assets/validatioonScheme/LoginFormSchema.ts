import * as Yup from "yup";

const loginFormSchema = Yup.object().shape({
    userName: Yup.string()
        .min(2, "global:FormsValidation:minLength")
        .max(40, "global:FormsValidation:maxLength")
        .required("global:FormsValidation:required"),
    password: Yup.string()
        .min(3, "global:FormsValidation:minLength")
        .required("global:FormsValidation:required"),
});
export default loginFormSchema;