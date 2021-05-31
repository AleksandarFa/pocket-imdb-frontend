import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";

import Header from "../Header/headerDashboard";
import SidePanel from "../SidePanel";
import CommentSection from "../Comments";
import LikeButton from "../../components/likeButton";
import ViewCount from "../../components/viewCount";
import WatchListHandler from "../../components/watchListHandler";

import { fetchSingleMovie } from "../../store/movies/actions";
import { fetchAuthenticatedUser } from "../../store/auth/actions";
import { addToWatchListRequest } from "../../store/movies/actions";
import { makeSelectMovie } from "../../store/movies/selectors";
import { makeSelectUser } from "../../store/auth/selectors";

const useStyles = makeStyles({
  box: {
    borderRadius: 3,
    flex: 2,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 3,
  },
  grid: {
    display: "flex",
    marginTop: 10,
  },
  gridItem: {
    margin: 10,
  },
  title: {
    margin: 10,
  },
});

const MoviePage = () => {
  const id = useParams();
  const movie = useSelector(makeSelectMovie());
  const user = useSelector(makeSelectUser());
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleMovie(id));
    dispatch(fetchAuthenticatedUser());
  }, [id]);

  const handleAddMovie = () => {
    const data = { movie: movie, user: user.id, watched: false };
    dispatch(addToWatchListRequest(data));
  };

  return (
    <div>
      <Header />
      <Grid className={classes.grid}>
        {movie && (
          <Box className={classes.box} border={1} m={3}>
            <Typography variant="h2" className={classes.title}>
              {movie.title}
            </Typography>
            <Typography variant="h4" className={classes.title}>
              {movie.genre.name}
            </Typography>
            <Typography variant="body2">
              <LikeButton movie_id={movie.id} likeDislike={true} />
              {movie.num_of_likes}
              <LikeButton movie_id={movie.id} likeDislike={false} />
              {movie.num_of_dislikes}
              <ViewCount viewsNumber={movie.num_of_views} />
              {user && (
                <WatchListHandler
                  userWatchList={user.watchlist_set}
                  userId={user.id}
                  movieId={movie.id}
                  movieWatchList={movie.watch_list}
                  handleAddMovie={handleAddMovie}
                />
              )}
            </Typography>
            <Grid className={classes.grid}>
              <Grid item className={classes.gridItem}>
                <Avatar className={classes.image}></Avatar>
              </Grid>
              <Grid item className={classes.gridItem}>
                <Typography>{movie.description}</Typography>
              </Grid>
            </Grid>
          </Box>
        )}
        <SidePanel />
      </Grid>
      <CommentSection movieId={id} user={user} />
    </div>
  );
};

export default MoviePage;
