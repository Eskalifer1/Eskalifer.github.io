import * as Yup from "yup";

const LostPassword = Yup.object().shape({
    userName: Yup.string()
        .min(2, "Must be longer than 2 characters")
        .max(40, "Nice try, nobody has a first name that long")
        .required("Required")
});
export default LostPassword;