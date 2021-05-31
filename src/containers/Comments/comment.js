import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    borderRadius: 3,
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-start",
  },
  date: {
    margin: 3,
    alignSelf: "flex-end",
  },
});

const Comment = ({ comment, date }) => {
  const classes = useStyles();
  return (
    <Box m={3} p={2} border={1} className={classes.root}>
      <Typography variant="body2" className={classes.comment}>
        {comment}
      </Typography>
      <Chip
        color="primary"
        variant="outlined"
        label={date}
        className={classes.date}
      />
    </Box>
  );
};

export default Comment;
