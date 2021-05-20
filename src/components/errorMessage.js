import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { retrieveMsgs } from "../utils/errors";

const useStyles = makeStyles({
  error: {
    backgroundColor: "#f50057",
    color: "white",
    width: "50%",
    margin: 12,
    padding: 12,
    borderRadius: 3,
  },
});

const ErrorMessage = ({ error }) => {
  const msgs = retrieveMsgs(error);
  const classes = useStyles();
  return (
    <div>
      {msgs.map((msg) => (
        <p className={classes.error} key={msg}>
          {msg}
        </p>
      ))}
    </div>
  );
};

export default ErrorMessage;
