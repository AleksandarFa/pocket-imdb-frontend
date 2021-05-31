import React from "react";

import VisibilityIcon from "@material-ui/icons/Visibility";
import { Box } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    margin: 10,
  },
  text: {
    margin: 10,
  },
});

const ViewCount = ({ viewsNumber }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <VisibilityIcon />
      &nbsp;&nbsp;{viewsNumber}
    </Box>
  );
};

export default ViewCount;
