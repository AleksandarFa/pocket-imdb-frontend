import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";

import { register } from "../../store/auth/actions";
import registerSchema from "./validations";

import Cssbaseline from "@material-ui/core/Cssbaseline";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "40%",
    margin: "auto",
    border: "black",
  },
  loginBtn: {
    width: "50%",
    marginTop: 10,
  },
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [t, i18n] = useTranslation("translation");
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      dispatch(register(values));
    },
  });
  return (
    <Typography component="div" variant="body1" className={classes.root}>
      <Cssbaseline />
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="firstName"
          name="firstName"
          label={t("register.firstName")}
          type="text"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && formik.errors.firstName}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          fullWidth
          id="lastName"
          name="lastName"
          label={t("register.lastName")}
          type="text"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && formik.errors.lastName}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
          fullWidth
          id="username"
          name="username"
          label={t("login.username")}
          type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && formik.errors.username}
          helperText={formik.touched.username && formik.errors.username}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label={t("register.email")}
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label={t("login.password")}
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && formik.errors.password}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          fullWidth
          id="confirmPassword"
          name="confirmPassword"
          label={t("register.confirmPassword")}
          type="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          className={classes.loginBtn}
        >
          {t("register.btnRegister")}
        </Button>
      </form>
    </Typography>
  );
};

export default RegisterForm;
