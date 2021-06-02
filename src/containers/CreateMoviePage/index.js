import React from "react";

import Header from "../Header/headerDashboard";
import MovieForm from "./createForm";
import MovieFormOMDB from "./createFromOMDB";

const CreateMoviePage = () => {
  return (
    <div>
      <Header />
      <MovieForm />
      <MovieFormOMDB />
    </div>
  );
};

export default CreateMoviePage;
