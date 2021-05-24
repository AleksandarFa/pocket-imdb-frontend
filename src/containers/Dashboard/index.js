import React from "react";

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../Header/headerDashboard";
import MovieList from "../Movie/movieList";
import Pagination from "../Pagination/";
import GenreFilter from "../GenreFilter";
import SearchBox from "../SearchBox";

const useStyles = makeStyles({
  box1: {
    margin: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  box2: {
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
      <Box className={classes.box1}>
        <GenreFilter />
        <SearchBox />
      </Box>
      <Box className={classes.box2}>
        <MovieList />
        <Pagination />
      </Box>
    </div>
  );
};

export default Dashboard;
