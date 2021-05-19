import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

import loginSchema from "./validations";
import { login } from "../../store/auth/actions";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Cssbaseline from "@material-ui/core/Cssbaseline";
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

const LoginForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });
  return (
    <Typography component="div" variant="body1" className={classes.root}>
      <Cssbaseline />
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
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
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && formik.errors.password}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          className={classes.loginBtn}
        >
          Sign In
        </Button>
      </form>
    </Typography>
  );
};

export default LoginForm;
