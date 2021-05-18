import React from "react";

const Header = ({ title }) => {
  return (
    <header className="ml-4 mr-4 d-flex">
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
