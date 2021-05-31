import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import WatchListItem from "./watchListItem";
import { fetchAuthenticatedUser } from "../../store/auth/actions";

import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  list: {
    width: "60%",
    margin: "20px auto",
  },
});

const WatchList = ({ movies }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthenticatedUser());
  }, []);

  return (
    <List className={classes.list}>
      {movies.map((movie) => {
        return (
          <WatchListItem
            key={movie.movie.id}
            movie={movie.movie}
            watched={movie.watched}
          />
        );
      })}
    </List>
  );
};

export default WatchList;
