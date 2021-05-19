import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/LIstItemText";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  box: {
    backgroundColor: "green",
  },
});

const MovieItem = ({ title, description }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Box className={classes.box}>Image</Box>
        </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={<React.Fragment>{description}</React.Fragment>}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
};

export default MovieItem;
