import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { makeSelectIsAuthenticated } from "../../store/auth/selectors";
import { LOGIN } from "../../routes";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(makeSelectIsAuthenticated());
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to={LOGIN} />
      }
    />
  );
};

export default PrivateRoute;
