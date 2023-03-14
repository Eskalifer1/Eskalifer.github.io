import * as Yup from "yup";

const LostPassword = Yup.object().shape({
  userName: Yup.string()
    .min(2, "global:FormsValidation:minLength")
    .max(40, "global:FormsValidation:maxLength")
    .required("global:FormsValidation:required"),
});
export default LostPassword;
