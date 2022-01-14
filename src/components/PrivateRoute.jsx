import React from "react";
import { Route, Redirect } from "react-router-dom";
import { LOCAL_STORAGE_SERVICE } from "../utils";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      return (LOCAL_STORAGE_SERVICE._getAccessTokenFromSession("_access_token") ? (
        <Component {...props}  />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      ))}
    }
  />
);
