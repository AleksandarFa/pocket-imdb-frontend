import React from "react";

import Nav from "../Nav";
import navLinks from "../Nav/constants";
import RegisterForm from "./registerForm";
import Header from "../Header";

const RegisterPage = () => {
  return (
    <main>
      <Header title={"Register"} />
      <Nav links={navLinks} />
      <RegisterForm />
    </main>
  );
};

export default RegisterPage;
