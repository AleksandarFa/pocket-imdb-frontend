import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  makeSelectMovie,
  makeSelectAllMovies,
} from "../../store/movies/selectors";

import { ROUTES } from "../../services/movieService";
import { MOVIE } from "../../routes";
import { fetchPageOfMoviesRequest } from "../../store/movies/actions";

import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 3,
  },
  title: {
    margin: theme.spacing(2),
  },
}));

const SidePanel = () => {
  const dispatch = useDispatch();
  const currentMovie = useSelector(makeSelectMovie());
  const movies = useSelector(makeSelectAllMovies());
  const classes = useStyles();
  const [t, i18n] = useTranslation("translation");

  useEffect(() => {
    if (!currentMovie) return;
    const url = `${ROUTES.MOVIES}?genre=${currentMovie.genre.id}`;
    dispatch(fetchPageOfMoviesRequest(url));
  }, [currentMovie]);

  return (
    <Box m={3} border={1} className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        {t("singleMovie.relatedMoviesTitle")}
      </Typography>
      <List>
        {movies &&
          currentMovie &&
          movies.results.map((movie) => {
            const route = MOVIE.replace(":id", movie.id);
            return movie.title != currentMovie.title ? (
              <Link key={movie.id} component={RouterLink} to={route}>
                <ListItem>
                  <ListItemText primary={movie.title} />
                </ListItem>
              </Link>
            ) : null;
          })}
      </List>
    </Box>
  );
};

export default SidePanel;
