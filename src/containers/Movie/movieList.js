import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../store/movies/actions";
import { makeSelectAllMovies } from "../../store/movies/selectors";
import { fetchAuthenticatedUser } from "../../store/auth/actions";

import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";

import MovieItem from "./movieListItem";

const useStyles = makeStyles({
  list: {
    width: "60%",
    margin: "20px auto",
  },
});

const MovieList = () => {
  const classes = useStyles();
  const movies = useSelector(makeSelectAllMovies());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchAuthenticatedUser());
  }, []);

  return (
    <List className={classes.list}>
      {movies &&
        movies.results &&
        movies.results.map((movie) => {
          return (
            <MovieItem
              key={movie.id}
              id={movie.id}
              title={movie.title}
              description={movie.description}
              likes={movie.num_of_likes}
              dislikes={movie.num_of_dislikes}
            />
          );
        })}
    </List>
  );
};

export default MovieList;
