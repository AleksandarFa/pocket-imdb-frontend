import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { MOVIE } from "../../routes";

import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/LIstItemText";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  box: {
    backgroundColor: "green",
    width: 100,
    height: 100,
  },
  text: {
    marginLeft: 20,
  },
});

const MovieItem = ({ id, title, description }) => {
  const classes = useStyles();
  const route = MOVIE.replace(":id", id);
  return (
    <React.Fragment>
      <ListItem alignItems="flex-start">
        <Link component={RouterLink} to={route}>
          <ListItemAvatar>
            <Box className={classes.box}>Image</Box>
          </ListItemAvatar>
        </Link>
        <ListItemText
          className={classes.text}
          primary={title}
          secondary={
            <React.Fragment>{description.slice(0, 200)}...</React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
};

export default MovieItem;
