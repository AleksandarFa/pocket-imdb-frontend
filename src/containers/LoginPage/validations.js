import * as Yup from "yup";
import { PASSWORD_MIN } from "../../consts/validations";

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required."),
  password: Yup.string()
    .required("Password is required.")
    .min(
      PASSWORD_MIN,
      "Password is too short. Should be at least 8 chars long."
    ),
});

export default loginSchema;
