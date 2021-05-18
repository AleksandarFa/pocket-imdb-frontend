import React from "react";
import { useFormik } from "formik";

import { useDispatch } from "react-redux";
import loginSchema from "./validations";
import { login } from "../../store/auth/actions";

const LoginForm = () => {
  const dispatch = useDispatch();
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
    <div className="container w-50 border p-3">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          ></input>
          {formik.errors.email ? (
            <small className="form-text text-muted">
              {formik.errors.email}
            </small>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          ></input>
          {formik.errors.password ? (
            <small className="form-text text-muted">
              {formik.errors.password}
            </small>
          ) : null}
        </div>
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
