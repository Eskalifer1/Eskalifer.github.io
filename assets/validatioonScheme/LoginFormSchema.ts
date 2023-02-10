import * as Yup from "yup";

const loginFormSchema = Yup.object().shape({
    userName: Yup.string()
        .min(2, "Must be longer than 2 characters")
        .max(40, "Nice try, nobody has a first name that long")
        .required("Required"),
    password: Yup.string()
        .min(3, "Must be longer than 3 characters")
        .required("Required")
});
export default loginFormSchema;