import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchMovies } from "../../store/movies/actions";
import { makeSelectAllMovies } from "../../store/movies/selectors";

import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";

import MovieItem from "./movieListItem";

const useStyles = makeStyles({
  list: {
    width: "60%",
    margin: "auto",
  },
});

const MovieList = () => {
  const classes = useStyles();
  const movies = useSelector(makeSelectAllMovies());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <List className={classes.list}>
      {movies &&
        movies.map((movie) => {
          return (
            <MovieItem
              key={movie.id}
              id={movie.id}
              title={movie.title}
              description={movie.description}
            />
          );
        })}
    </List>
  );
};

export default MovieList;
