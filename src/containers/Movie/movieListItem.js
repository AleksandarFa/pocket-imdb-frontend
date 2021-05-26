import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { MOVIE } from "../../routes";
import LikeButton from "../../components/likeButton";
import ViewCount from "../../components/viewCount";

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

const MovieItem = ({ id, title, description, likes, dislikes, views }) => {
  const classes = useStyles();
  const route = MOVIE.replace(":id", id);

  return (
    <React.Fragment>
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
                <LikeButton movie_id={id} likeDislike={true} />
                <p className={classes.number}>{likes}</p>
              </Grid>
              <Grid item className={classes.gridItem}>
                <LikeButton movie_id={id} likeDislike={false} />
                <p className={classes.number}>{dislikes}</p>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <ListItemText
          className={classes.text}
          primary={
            <React.Fragment>
              {title}
              <ViewCount viewsNumber={views} />
            </React.Fragment>
          }
          secondary={
            <React.Fragment>{description.slice(0, 300)}...</React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
};

export default MovieItem;
