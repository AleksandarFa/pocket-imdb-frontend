import * as Yup from "yup";

import {
  FIRST_NAME_MIN,
  LAST_NAME_MIN,
  USERNAME_MIN,
  PASSWORD_MIN,
  INPUT_MAX,
} from "../../consts/validations";

const registerSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is Required.")
    .min(FIRST_NAME_MIN, "First name is too short.")
    .max(INPUT_MAX, "First name too long. Should be less than 255 chars long."),
  lastName: Yup.string()
    .required("Last name is Required.")
    .min(LAST_NAME_MIN, "Last name is too short.")
    .max(INPUT_MAX, "Last name too long. Should be less than 255 chars long."),
  username: Yup.string()
    .required("Username is Required.")
    .min(USERNAME_MIN, "Username is too short. Should be 4 charas minimum.")
    .max(INPUT_MAX, "Username too long. Should be less than 255 chars long."),
  email: Yup.string()
    .email()
    .required("Email is required.")
    .max(INPUT_MAX, "Emial too long. Should be less than 255 chars long."),
  password: Yup.string()
    .required("No password provided.")
    .min(PASSWORD_MIN, "Password is too short. Should be 8 chars minimum.")
    .max(INPUT_MAX, "Password too long. Should be less than 255 chars long."),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export default registerSchema;
