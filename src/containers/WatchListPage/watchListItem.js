import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { makeSelectUser } from "../../store/auth/selectors";
import { updateWatchedRequest } from "../../store/movies/actions";
import { deleteWatchListItem } from "../../store/movies/actions";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  success: {
    backgroundColor: "#00e676",
    color: "white",
  },
  danger: {
    backgroundColor: "#ff1744",
    color: "white",
  },
});

const WatchListItem = ({ movie, watched }) => {
  const user = useSelector(makeSelectUser());
  const dispatch = useDispatch();
  const classes = useStyles();
  const [t, i18n] = useTranslation("translation");

  const handleWatched = () => {
    delete movie.cover_image;
    const data = { movie: movie, user: user.id, watched: true };
    dispatch(updateWatchedRequest(data));
  };

  const handleDelete = () => {
    delete movie.cover_image;
    const data = { movie: movie, user: user.id };
    dispatch(deleteWatchListItem(data));
  };

  return (
    <>
      <ListItem>
        <ListItemText>{movie.title}</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Chip
            variant="outlined"
            color="primary"
            label={watched ? t("watchList.labelOne") : t("watchList.labelTwo")}
          />
        </ListItemText>
      </ListItem>
      {!watched && (
        <ListItem>
          <Button
            className={classes.success}
            variant="outlined"
            onClick={handleWatched}
          >
            {t("watchList.watchedBtn")}
          </Button>
        </ListItem>
      )}
      {!watched && (
        <ListItem>
          <Button
            variant="outlined"
            className={classes.danger}
            onClick={handleDelete}
          >
            {t("watchList.removeBtn")}
          </Button>
        </ListItem>
      )}
      <Divider variant="inset" component="li" />
    </>
  );
};

export default WatchListItem;
