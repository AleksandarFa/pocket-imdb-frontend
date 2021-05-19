import React from "react";

import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { logout } from "../../store/auth/actions";

import MovieList from "../Movie/movieList";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Cssbaseline from "@material-ui/core/Cssbaseline";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
});

const DashboardHeader = () => {
  const dispatch = useDispatch();
  const [t, i18n] = useTranslation("translation");
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="static">
        <Cssbaseline />
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            {t("dashboard.title")}
          </Typography>
          <Button color="inherit" onClick={() => dispatch(logout())}>
            {t("dashboard.logoutBtn")}
          </Button>
        </Toolbar>
      </AppBar>
      <MovieList />
    </React.Fragment>
  );
};

export default DashboardHeader;
