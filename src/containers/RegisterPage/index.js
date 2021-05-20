import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { makeSelectError } from "../../store/auth/selectors";
import Error from "../../components/errorMessage";

import Nav from "../Nav";
import navLinks from "../Nav/constants";
import RegisterForm from "./registerForm";
import Header from "../Header";

const RegisterPage = () => {
  const [t, i18n] = useTranslation("translation");
  const error = useSelector(makeSelectError());
  return (
    <main>
      <Header title={t("register.title")} />
      <Nav links={navLinks} />
      {error && <Error error={error} />}
      <RegisterForm />
    </main>
  );
};

export default RegisterPage;
