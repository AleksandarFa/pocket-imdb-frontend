import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  link: {
    margin: 12,
  },
});

export default ({ links }) => {
  const [t, i18n] = useTranslation("translation");
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {links.map((link) => {
            return (
              <Link
                component={RouterLink}
                to={link.link}
                color="inherit"
                underline="none"
                key={link.id}
                className={classes.link}
              >
                {t(link.text)}
              </Link>
            );
          })}
        </Toolbar>
      </AppBar>
    </>
  );
};
