import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { makeSelectIsRegistered } from "../../store/auth/selectors";

import { makeStyles } from "@material-ui/core/styles";

import Header from "../Header";
import LoginForm from "./loginForm";
import Nav from "../Nav";
import links from "../Nav/constants";

const useStyles = makeStyles({
  registration: {
    backgroundColor: "#4caf50",
    color: "white",
    width: "50%",
    margin: 12,
    padding: 12,
    borderRadius: 3,
  },
});

const LoginPage = () => {
  const registration = useSelector(makeSelectIsRegistered());
  const [t, i18n] = useTranslation("translation");
  const classes = useStyles();
  return (
    <main>
      <Header title={t("login.title")} />
      <Nav links={links} />
      {registration ? (
        <div className={classes.registration}>{t("login.registerSuccess")}</div>
      ) : null}
      <LoginForm />
    </main>
  );
};

export default LoginPage;
