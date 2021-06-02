import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { MOVIE } from "../../routes";
import LikeButton from "../../components/likeButton";
import ViewCount from "../../components/viewCount";
import WatchListHandler from "../../components/watchListHandler";
import { makeSelectUser } from "../../store/auth/selectors";
import { addToWatchListRequest } from "../../store/movies/actions";

import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/LIstItemText";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  box: {
    backgroundColor: "green",
    width: 100,
    height: 100,
  },
  text: {
    marginLeft: 20,
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  number: {
    margin: 0,
  },
});

const MovieItem = ({ movie }) => {
  const classes = useStyles();
  const route = MOVIE.replace(":id", movie.id);
  const user = useSelector(makeSelectUser());
  const dispatch = useDispatch();
  const [t, i18n] = useTranslation("translation");

  const handleAddMovie = () => {
    const data = { movie: movie, user: user.id, watched: false };
    dispatch(addToWatchListRequest(data));
  };

  return (
    <React.Fragment>
      {user && (
        <ListItem alignItems="flex-start">
          <Box>
            <Link component={RouterLink} to={route}>
              <ListItemAvatar>
                <Box className={classes.box}>Image</Box>
              </ListItemAvatar>
            </Link>
            <Box>
              <Grid container className={classes.grid}>
                <Grid item className={classes.gridItem}>
                  <LikeButton movie_id={movie.id} likeDislike={true} />
                  <p className={classes.number}>{movie.num_of_likes}</p>
                </Grid>
                <Grid item className={classes.gridItem}>
                  <LikeButton movie_id={movie.id} likeDislike={false} />
                  <p className={classes.number}>{movie.num_of_dislikes}</p>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <ListItemText
            className={classes.text}
            primary={
              <React.Fragment>
                {movie.title}
                <ViewCount viewsNumber={movie.num_of_views} />
                <WatchListHandler
                  userWatchList={user.watchlist_set}
                  userId={user.id}
                  movieId={movie.id}
                  movieWatchList={movie.watch_list}
                  handleAddMovie={handleAddMovie}
                />
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                {movie.description.slice(0, 300)}...
              </React.Fragment>
            }
          />
        </ListItem>
      )}
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
};

export default MovieItem;
