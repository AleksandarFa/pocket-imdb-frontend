import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";

import { register } from "../../store/auth/actions";
import registerSchema from "./validations";

const RegisterForm = () => {
  const dispatch = useDispatch();
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
    <div className="container w-50 border p-3">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-row">
          <div className="col">
            <label htmlFor="firstName">First name:</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            ></input>
            {formik.errors.firstName ? (
              <small className="form-text text-muted">
                {formik.errors.firstName}
              </small>
            ) : null}
          </div>
          <div className="col">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            ></input>
            {formik.errors.lastName ? (
              <small className="form-text text-muted">
                {formik.errors.lastName}
              </small>
            ) : null}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            onChange={formik.handleChange}
            value={formik.values.username}
          ></input>
          {formik.errors.username ? (
            <small className="form-text text-muted">
              {formik.errors.username}
            </small>
          ) : null}
        </div>
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
        <div className="form-group">
          <label htmlFor="password2">Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          ></input>
          {formik.errors.confirmPassword ? (
            <small className="form-text text-muted">
              {formik.errors.confirmPassword}
            </small>
          ) : null}
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
