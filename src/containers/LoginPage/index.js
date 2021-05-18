import React from "react";
import { useSelector } from "react-redux";

import Header from "../Header";
import LoginForm from "./loginForm";
import Nav from "../Nav";
import links from "../Nav/constants";

const LoginPage = () => {
  return (
    <main>
      <Header title={"Login page"} />
      <Nav links={links} />
      {/* {registration ? (
        <div className="alert alert-success" role="alert">
          Successful registration. Please login.
        </div>
      ) : null} */}
      <LoginForm />
    </main>
  );
};

export default LoginPage;
