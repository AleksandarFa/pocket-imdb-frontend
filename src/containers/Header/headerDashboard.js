import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { logout } from "../../store/auth/actions";
import { WATCHLIST, CREATEMOVIE, DASHBOARD } from "../../routes";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Cssbaseline from "@material-ui/core/Cssbaseline";
import Link from "@material-ui/core/Link";
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
            <Link
              to={DASHBOARD}
              component={RouterLink}
              color="inherit"
              style={{ textDecoration: "none" }}
            >
              {t("dashboard.title")}
            </Link>
          </Typography>
          <Button to={CREATEMOVIE} component={RouterLink} color="inherit">
            {t("dashboard.createMovieBtn")}
          </Button>
          <Button to={WATCHLIST} component={RouterLink} color="inherit">
            {t("dashboard.watchListBtn")}
          </Button>
          <Button color="inherit" onClick={() => dispatch(logout())}>
            {t("dashboard.logoutBtn")}
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default DashboardHeader;
