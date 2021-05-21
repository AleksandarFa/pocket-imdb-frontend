import React from "react";

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../Header/headerDashboard";
import MovieList from "../Movie/movieList";
import Pagination from "../Pagination/";

const useStyles = makeStyles({
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <Box className={classes.box}>
        <MovieList />
        <Pagination />
      </Box>
    </div>
  );
};

export default Dashboard;
