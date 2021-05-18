import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required."),
  password: Yup.string()
    .required("Password is required.")
    .min(8, "Password is too short. Should be at least 8 chars long."),
});

export default loginSchema;
