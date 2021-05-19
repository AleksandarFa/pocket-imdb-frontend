import * as Yup from "yup";

import {
  FIRST_NAME_MIN,
  LAST_NAME_MIN,
  USERNAME_MIN,
  PASSWORD_MIN,
} from "../../consts/validations";

const registerSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is Required.")
    .min(FIRST_NAME_MIN, "First name is too Shor."),
  lastName: Yup.string()
    .required("Last name is Required.")
    .min(LAST_NAME_MIN, "Last name is too short."),
  username: Yup.string()
    .required("Username is Required.")
    .min(USERNAME_MIN, "Username is too short. Should be 4 charas minimum."),
  email: Yup.string().email().required("Email is required."),
  password: Yup.string()
    .required("No password provided.")
    .min(PASSWORD_MIN, "Password is too short. Should be 8 chars minimum."),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export default registerSchema;
