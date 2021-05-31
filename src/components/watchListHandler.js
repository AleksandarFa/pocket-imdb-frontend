import React from "react";
import { useTranslation } from "react-i18next";

import AddBoxIcon from "@material-ui/icons/AddBox";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";

import findWatched from "../utils/findWatched";
import userExist from "../utils/userExist";

const WatchListHandler = ({
  userWatchList,
  userId,
  movieId,
  movieWatchList,
  handleAddMovie,
}) => {
  const [t, i18n] = useTranslation("translation");
  return (
    <>
      {findWatched(userWatchList, userId, movieId) ? (
        <Chip
          variant="outlined"
          color="secondary"
          label={t("dashboard.watched")}
        />
      ) : userExist(movieWatchList, userId) ? (
        <Chip
          variant="outlined"
          color="secondary"
          label={t("dashboard.inWatchList")}
        />
      ) : (
        <Button
          variant="outlined"
          color="primary"
          startIcon={<AddBoxIcon />}
          onClick={handleAddMovie}
        >
          {t("dashboard.watchListBtn")}
        </Button>
      )}
    </>
  );
};

export default WatchListHandler;
