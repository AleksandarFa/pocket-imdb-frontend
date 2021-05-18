import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeSelectIsAuthenticated } from "../../store/auth/selectors";
import { DASHBOARD } from "../../routes";

const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(makeSelectIsAuthenticated());

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Redirect to={DASHBOARD} /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
