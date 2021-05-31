import React from "react";
import { Switch } from "react-router-dom";

import PrivateRoute from "../PrivateRoute";
import PublicRoute from "../PublicRoute";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";
import WelcomePage from "../WelcomePage";
import Dashboard from "../Dashboard";
import MoviePage from "../Movie/moviePage";
import WatchListPage from "../WatchListPage";

import {
  LOGIN,
  REGISTER,
  WELCOME,
  DASHBOARD,
  MOVIE,
  WATCHLIST,
} from "../../routes";

export default function Routers() {
  return (
    <Switch>
      <PublicRoute path={LOGIN} component={LoginPage} />
      <PublicRoute path={REGISTER} component={RegisterPage} />
      <PrivateRoute path={MOVIE} component={MoviePage} />
      <PrivateRoute path={DASHBOARD} component={Dashboard} />
      <PrivateRoute path={WATCHLIST} component={WatchListPage} />
      <PublicRoute path={WELCOME} component={WelcomePage} />
    </Switch>
  );
}
