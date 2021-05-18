import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is Required.")
    .min(2, "First name is too Shor."),
  lastName: Yup.string()
    .required("Last name is Required.")
    .min(1, "Last name is too short."),
  username: Yup.string()
    .required("Username is Required.")
    .min(4, "Username is too short. Should be 4 charas minimum."),
  email: Yup.string().email().required("Email is required."),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short. Should be 8 chars minimum."),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export default registerSchema;
