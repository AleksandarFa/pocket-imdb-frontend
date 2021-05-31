import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

import { ROUTES } from "../../services/movieService";
import { MOVIE } from "../../routes";
import { makeSelectPopular } from "../../store/movies/selectors";
import {
  fetchPopularMoviesRequest,
  fetchWatchListRequest,
} from "../../store/movies/actions";

import {
  Box,
  Typography,
  List,
  Link,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 3,
    flex: 1,
    marginRight: 10,
  },
  title: {
    margin: theme.spacing(2),
  },
}));

const PopularMovies = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const movies = useSelector(makeSelectPopular());
  const [t, i18n] = useTranslation("translation");

  useEffect(() => {
    const url = ROUTES.POPULAR;
    dispatch(fetchPopularMoviesRequest(url));
    dispatch(fetchWatchListRequest(ROUTES.WATCHLIST));
  }, []);

  return (
    <Box border={1} className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        {t("dashboard.popularMovies")}
      </Typography>
      <List>
        {movies &&
          movies.map((movie) => {
            const route = MOVIE.replace(":id", movie.id);
            return (
              <Link key={movie.id} component={RouterLink} to={route}>
                <ListItem>
                  <ListItemText primary={movie.title} />
                </ListItem>
              </Link>
            );
          })}
      </List>
    </Box>
  );
};

export default PopularMovies;
